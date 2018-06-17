'use strict';

/**
 * @typedef {import("telegraf").Telegraf} Telegraf
 */

/**
 * Polling-mode usefull for development
 * @param {Object} options
 * @param {Telegraf} options.bot
 */
module.exports = (options) => {
  return options.bot.startPolling();
}