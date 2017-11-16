const config = require('config');
const Telegraf = require('telegraf')

const adjectives = require('./adjectives')

const {
	greeting
} = require('./templates');

const bot = new Telegraf(config.token);

bot.start((ctx) => {
	return ctx.reply('Йо, Йо, Йо!')
});

bot.command('greating', (ctx) => {
	ctx.reply(greeting(adjectives.getAdjective()), {
		parse_mode: 'Markdown'
	})
});

bot.startPolling()
