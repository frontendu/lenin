const {
	isEmpty,
	mergeWith
} = require('lodash');
const config = require('config');
const Telegraf = require('telegraf');

const adjectives = require('./adjectives');
const trello = require('./trello');

const {
	add,
	empty,
	greeting
} = require('./templates');

const bot = new Telegraf(config.telegram.token, {
	username: config.telegram.username
});

const getCardContent = ({text}) => {
	const [greeting, ...parts] = text.split(' ');
	const [name = '', desc = ''] = greeting[0] === '/'
		? parts.join(' ').split(/\n\n/)
		: [greeting, ...parts].join(' ').split(/\n\n/);

	return {
		name: name.trim(),
		desc: desc.trim()
	};
};

function mergeEmpty(objValue, srcValue) {
  return isEmpty(srcValue) ? objValue : srcValue;
}

bot.start((ctx) => {
	return ctx.reply('Йо, Йо, Йо!');
});

bot.command('greating', (ctx) => {
	ctx.reply(greeting(adjectives.getAdjective()), {
		reply_to_message_id: ctx.message.id,
		parse_mode: 'Markdown'
	})
});

bot.command('add', (ctx) => {
	const content = getCardContent(ctx.message);

	if (!content.name) {
		ctx.reply(empty());
		return;
	}

	trello
		.addCard(content)
		.then(({body: {url}}) => {
			ctx.reply(add(url), {
				reply_to_message_id: ctx.message.id,
			});
		});
});

bot.startPolling()
