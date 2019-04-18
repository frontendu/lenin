'use strict';

import Scene from 'telegraf/scenes/base';
import Stage from 'telegraf/stage';
import Telegraf, { ContextMessageUpdate } from 'telegraf';
import {
  cardDescription,
  description,
  name,
  thanks
} from 'app/theme/templates';
import { TrelloService } from 'services';

const DESCRIPTION_NOT_AVAILABLE = 'DESCRIPTION_NOT_AVAILABLE';

const handleCommand = (ctx: any) => {
  ctx.scene.enter('addTheme');
};

const handleName = (ctx: any) => {
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

const addThemeToTrello = (ctx: any) => {
  const { name, desc } = ctx.scene.state;

  TrelloService.addTheme({
    name,
    desc
  });
};

const getMarkdownUsername = (username: string) =>
  `[@${username}](https://t.me/${username})`;

const getForward = (ctx: any) => {
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

const addUsername = (ctx: any) => {
  Object.assign(ctx.scene.state, {
    username: getMarkdownUsername(ctx.scene.state.username)
  });
};

const addDescription = (ctx: any) => {
  Object.assign(ctx.scene.state, {
    desc: ctx.message.text || ctx.message.caption
  });
};

const addPredefinedDescription = (ctx: any, desc: string) => {
  Object.assign(ctx.scene.state, { desc });
};

const handleDescription = (ctx: any) => {
  ctx.scene.state.desc = cardDescription({
    forward: getForward(ctx),
    username: ctx.scene.state.username,
    desc: ctx.scene.state.desc
  });

  addThemeToTrello(ctx);

  ctx.reply(thanks());
  ctx.scene.leave();
};

const handleCallbackQuery = (ctx: any) => {
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
};

const getAddThemeScene = () => {
  return new Scene('addTheme')
    .enter((ctx: any) => {
      ctx.replyWithMarkdown(name());
    })
    .command('cancel', (ctx: any) => {
      ctx.scene.leave();
    })
    .on('message', (ctx: any) => {
      if (!ctx.scene.state.name) {
        return handleName(ctx);
      }

      addDescription(ctx);
      addUsername(ctx);
      handleDescription(ctx);
    })
    .on('callback_query', handleCallbackQuery);
};

export const handleManual = (
  bot: Telegraf<ContextMessageUpdate>,
  stage: Stage
) => {
  stage.register(getAddThemeScene());
  bot.command('add', handleCommand);
};
