'use strict';

module.exports = {
	telegram: {
		mode: 'webhook',
		token: process.env.TELEGRAM_API_TOKEN,
		username: process.env.TELEGRAM_API_USERNAME,
		port: process.env.PORT,
		host: process.env.TELEGRAM_API_HOST
	},
	trello: {
		key: process.env.TRELLO_KEY,
		token: process.env.TRELLO_TOKEN,
		list: process.env.TRELLO_LIST
	}
};
