'use strict';

const {
  cardDescription,
  description,
  name,
  thanks
} = require('./templates');

const Scene = require('telegraf/scenes/base');

const DESCRIPTION_NOT_AVAILABLE = 'DESCRIPTION_NOT_AVAILABLE';

const handleCommand = ctx => {
  ctx.scene.enter('addTheme');
};

const handleName = ctx => {
  const { state } = ctx.scene;
  const name = ctx.message.text || ctx.message.caption;
  const { first_name, last_name, username } = ctx.message.from;

  Object.assign(state, {
    name,
    first_name,
    last_name,
    username
  });

  ctx.replyWithMarkdown(description(), {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Описание не нужно',
            callback_data: DESCRIPTION_NOT_AVAILABLE
          }
        ]
      ]
    }
  });
};

const addThemeToTrello = ctx => {
  const {
    name,
    desc
  } = ctx.scene.state;

  ctx.trello.addTheme({
    name,
    desc
  });
};

const getMarkdownUsername = username => (
  `[@${username}](https://t.me/${username})`
);

const getForward = ctx => {
  if (!ctx.message) {
    return null;
  }

  if (!ctx.message.forward_from_chat && !ctx.message.forward_from) {
    return null;
  }

  return ctx.message.forward_from_chat
    ? getMarkdownUsername(ctx.message.forward_from_chat.username)
    : getMarkdownUsername(ctx.message.forward_from.username);
};

const addUsername = ctx => {
  Object.assign(ctx.scene.state, {
    username: getMarkdownUsername(ctx.scene.state.username)
  });
};

const addDescription = ctx => {
  Object.assign(ctx.scene.state, {
    desc: ctx.message.text || ctx.message.caption
  });
};

const addPredefinedDescription = (ctx, desc) => {
  Object.assign(ctx.scene.state, { desc });
};

const handleDescription = ctx => {
  ctx.scene.state.desc = cardDescription({
    forward: getForward(ctx),
    username: ctx.scene.state.username,
    desc: ctx.scene.state.desc
  });

  addThemeToTrello(ctx);

  ctx.reply(thanks());
  ctx.scene.leave();
};

const handleCallbackQuery = (ctx) => {
  switch (ctx.callbackQuery.data) {
    case DESCRIPTION_NOT_AVAILABLE: {
      addPredefinedDescription(ctx, 'Отсутствует описание');
      addUsername(ctx);
      handleDescription(ctx);
      break;
    }
    default: {
      ctx.scene.leave();
    }
  }
}

const getAddThemeScene = () => {
  return new Scene('addTheme')
    .enter((ctx) => {
      ctx.replyWithMarkdown(name());
    })
    .on('message', ctx => {
      if (!ctx.scene.state.name) {
        return handleName(ctx);
      }

      addDescription(ctx);
      addUsername(ctx);
      handleDescription(ctx);
    })
    .on('callback_query', handleCallbackQuery);
};

exports.stage = stage => {
  stage.register(getAddThemeScene());
}

exports.init = bot => {
  bot.command('add', handleCommand);
};