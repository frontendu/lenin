const {promisify} = require('util');
const config = require('config');
const request = require('request');

const requestP = promisify(request);

module.exports = {
	addCard({name, desc}) {
		const options = {
			method: 'POST',
			url: 'https://api.trello.com/1/cards',
			json: true,
			qs: {
				idList: config.trello.list,
				key: config.trello.key,
				token: config.trello.token,
				name,
				desc
			}
		};

		return requestP(options);
	}
};
