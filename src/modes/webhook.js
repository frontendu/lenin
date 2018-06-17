'use strict';

const crypto = require('crypto');
const { promisify } = require('util');

const getWebhookPath = () => {
	return promisify(crypto.randomBytes)(16)
		.then(bytes => bytes.toString('hex'))
		.then(hex => `/${hex}`);
};

/**
 * Webhook-mode for bot. Useful for production environments
 * such as Heroku etc.
 *
 * @param {Object} options
 * @param {Object} options.bot
 * @param {Object} options.params
 * @param {string} options.params.host
 * @param {string} options.params.webhook
 * @param {number} options.params.port
 */
module.exports = async (options) => {
  const path = await getWebhookPath();
  const host = options.params.host;

	options.bot.telegram.setWebhook(`${host}${path}`)
	options.bot.startWebhook(path, null, options.params.port);
};