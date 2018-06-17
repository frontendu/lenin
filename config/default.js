'use strict';

module.exports = {
	telegram: {
		options: {},
		mode: 'webhook',
		token: process.env.TELEGRAM_API_TOKEN,
		port: process.env.PORT,
		host: process.env.TELEGRAM_API_HOST
	},
	trello: {
		key: process.env.TRELLO_KEY,
		token: process.env.TRELLO_TOKEN,
		themesList: process.env.TRELLO_THEMES_LIST
	}
};
