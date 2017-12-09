const config = require('config');
const Telegraf = require('telegraf');

const adjectives = require('./adjectives');
const trello = require('./trello');

const {
	add,
	greeting
} = require('./templates');

const bot = new Telegraf(config.telegram.token, {
	username: config.telegram.username
});

const getCardContent = ({message: {text}}) => {
	const [greeting, ...parts] = text.split(' ');
	const [name, desc] = parts.join('').split(/\n\n/);

	return {
		name,
		desc
	};
}

bot.start((ctx) => {
	return ctx.reply('Йо, Йо, Йо!');
});

bot.command('greating', (ctx) => {
	ctx.reply(greeting(adjectives.getAdjective()), {
		parse_mode: 'Markdown'
	})
});

bot.command('add', (ctx) => {
	trello
		.addCard(getCardContent(ctx))
		.then(({body: {url}}) => {
			ctx.reply(add(url));
		});
});

bot.startPolling()
