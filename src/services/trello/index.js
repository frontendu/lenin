'use strict';

const axios = require('axios');

const request = axios.create({
  baseURL: 'https://api.trello.com/1/'
});

module.exports = ({
	key,
	token,
	themesList
}) => ({
	addTheme: ({ name, desc, pos = 'top' }) => (
		request({
			method: 'POST',
			url: '/cards',
			data: {
				idList: themesList,
				key: key,
				token: token,
				name,
				desc,
				pos
			}
		})
	)
});
