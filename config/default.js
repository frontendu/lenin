module.exports = {
	telegram: {
		token: process.env.TELEGRAM_API_KEY,
		username: process.env.TELEGRAM_API_USERNAME
	},
	trello: {
		key: process.env.TRELLO_KEY,
		token: process.env.TRELLO_TOKEN,
		list: process.env.TRELLO_LIST
	}
};
