'use strict';

/**
 * Getting selfname
 * @param {Object} bot Bot
 */
module.exports = async bot => {
  bot.options.username = (await bot.telegram.getMe()).username;
};