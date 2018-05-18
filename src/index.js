'use strict';

const config = require('config');
const Telegraf = require('telegraf');
const modes = require('./modes');


const bot = new Telegraf(config.get('telegram.token'));

bot
	.start(ctx => {
		return ctx.reply('Йо, Йо, Йо!');
	});

modes[config.get('telegram.mode')]({
	bot,
	params: config.get('telegram')
});

/**
 * @todo Make it works
 */

/*
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

bot.command('greating', (ctx) => {
	ctx.reply(greeting(adjectives.getAdjective()), {
		reply_to_message_id: ctx.message.message_id,
		parse_mode: 'Markdown'
	})
});

bot.command('add', (ctx) => {
	const content = getCardContent(ctx.message);

	if (!content.name) {
		ctx.reply(empty(), {
			reply_to_message_id: ctx.message.message_id,
		});
		return;
	}

	trello
		.addCard(content)
		.then(({body: {url}}) => {
			ctx.reply(add(url), {
				reply_to_message_id: ctx.message.message_id,
			});
		});
});

bot.startPolling()
*/
