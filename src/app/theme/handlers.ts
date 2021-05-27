import { TrelloService } from 'services/trello.service';
import { Theme } from 'app/theme/models';
import { ThemeAnswer } from 'app/theme/types';

export const askTheme = async (ctx: any) => {
  ctx.replyWithMarkdown('Добавить в темы?', {
    reply_to_message_id: ctx.message.message_id,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '👍',
            callback_data: ThemeAnswer.YES
          },
          {
            text: '🙅‍️',
            callback_data: ThemeAnswer.NO
          }
        ]
      ]
    }
  });
};

export const addTheme = async (ctx: any) => {
  const { url } = await TrelloService.addTheme(
    await Theme.fromChannelMessage(
      ctx.callbackQuery.message.reply_to_message,
      ctx
    )
  ) as any;

  ctx.editMessageText(`[Готово](${url})`, { parse_mode: 'Markdown' });
};

export const clearAsk = async (ctx: any) => {
  try {
    ctx.deleteMessage();
  } catch (e) {}
};
