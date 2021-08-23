'use strict';

import Scene from 'telegraf/scenes/base';
import Stage from 'telegraf/stage';
import Telegraf, { ContextMessageUpdate } from 'telegraf';
import got from 'got';
import fs from 'fs';

const handleCommand = (ctx: any) => {
  ctx.scene.enter('addThumb');
};

export const podcastNumber = 'Номер выпуска';

const GENERATOR_URL = 'https://shrouded-escarpment-86507.herokuapp.com';


const handleName = (ctx: any) => {
  const { state } = ctx.scene;
  const name = ctx.message.text;

  Object.assign(state, {
    name
  });

  ctx.replyWithMarkdown(podcastNumber);
};

const handleNumber = (ctx: any) => {
  const { state } = ctx.scene;
  const number = ctx.message.text;

  Object.assign(state, {
    number
  });

  ctx.replyWithMarkdown('Теперь пришли картинку');
};

const generateImage = async (ctx: any) => {
  const { number, name } = ctx.scene.state;
  const { file_id } = ctx.message.photo[ctx.message.photo.length - 1];

  const link = await ctx.telegram.getFileLink(file_id);
  const { body: image } = await got(link, {
    encoding: null
  });

  const { body: response } = await got(GENERATOR_URL, {
    body: image,
    encoding: null,
    query: {
      heroName: name,
      podcastNumber: number
    }
  });

  fs.writeFileSync('res.png', response);

  ctx.replyWithPhoto({ source: response });
};

const handleImage = async (ctx: any) => {
  ctx.reply('Вот картинка!');
  await generateImage(ctx);
  ctx.scene.leave();
};

const handleCallbackQuery = (ctx: any) => {
  switch (ctx.callbackQuery.data) {
    default: {
      ctx.scene.leave();
    }
  }
};

const getAddThumbScene = () => {
  return new Scene('addThumb')
    .enter((ctx: any) => {
      ctx.replyWithMarkdown('Йоу, отправь имя героя');
    })
    .command('cancel', (ctx: any) => {
      ctx.scene.leave();
    })
    .on('message', (ctx: any) => {
      if (!ctx.scene.state.name) {
        return handleName(ctx);
      }

      if (!ctx.scene.state.number) {
        return handleNumber(ctx);
      }

      handleImage(ctx);
    })
    .on('callback_query', handleCallbackQuery);
};

export const handleThumb = (
  bot: Telegraf<ContextMessageUpdate>,
  stage: Stage
) => {
  stage.register(getAddThumbScene());
  bot.command('thumb', handleCommand);
};
