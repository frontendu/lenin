'use strict';

const config = require('config');
const Telegraf = require('telegraf');
const Stage = require('telegraf/stage');
const session = require('telegraf/session');
const modes = require('./modes');
const parts = require('./parts');
const trello = require('./services/trello');

const start = bot => {
  modes[config.get('telegram.mode')]({
    bot,
    params: config.get('telegram')
  });
};

const setup = async () => {
  const bot = new Telegraf(
    config.get('telegram.token'),
    config.get('telegram.options')
  );

  // Setup services
  bot.context.trello = trello({
    key: config.get('trello.key'),
    token: config.get('trello.token'),
    themesList: config.get('trello.themesList')
  });

  const stage = new Stage();

  await parts.init(bot);

  bot
    .use(session())
    .use(stage.middleware())

  parts.themes.stage(stage);
  parts.themes.init(bot);

  start(bot);
};

setup();