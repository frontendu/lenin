import { ThemePosition } from 'services';
import { Message, PhotoSize } from 'telegram-typings';
import { ContextMessageUpdate } from 'telegraf';
import { MessageAnimation } from 'telegraf/typings/telegram-types';
import { cardDescription } from 'app/theme/templates';

const SEPARATORS_LIST = ['.', ';', ':', '!', '?'];
const SENTENCE_SEPARATOR_RE = new RegExp(
  `(${SEPARATORS_LIST.map(s => `\\${s}[\\s\\n]`).join('|')})`
);
const MINIMAL_WORDS_COUNT = 10;

export class Theme {
  private static getMarkdownUsername(username: string) {
    return `[@${username}](https://t.me/${username})`;
  }

  private static getMainSentence(text: string) {
    const sentence = text.split(SENTENCE_SEPARATOR_RE)[0];

    if (sentence.length === text.length) {
      return `${sentence
        .split(' ')
        .slice(0, MINIMAL_WORDS_COUNT)
        .join(' ')}...`;
    }

    return sentence;
  }

  private static getForward(message: Message) {
    if (!message.forward_from_chat && !message.forward_from) {
      return null;
    }

    return message.forward_from_chat
      ? Theme.getMarkdownUsername(message.forward_from_chat.username)
      : Theme.getMarkdownUsername(message.forward_from.username);
  }

  private static getDescription(message: Message, ctx: ContextMessageUpdate) {
    return cardDescription({
      username: Theme.getMarkdownUsername(message.from.username),
      forward: Theme.getForward(message),
      desc: message.text || message.caption
    });
  }

  private static async getPhotoURL(
    photo: PhotoSize[],
    ctx: ContextMessageUpdate
  ) {
    const { file_id } = photo.reduce((acc, photoItem) => {
      if (!acc) {
        return photoItem;
      }

      if (acc.width < photoItem.width) {
        return photoItem;
      }

      return acc;
    }, null);

    return ctx.telegram.getFileLink(file_id);
  }

  private static async getAnimation(
    message: MessageAnimation,
    ctx: ContextMessageUpdate
  ) {
    const { file_id } = message.animation;

    return ctx.telegram.getFileLink(file_id);
  }

  private static async getImages(message: Message, ctx: ContextMessageUpdate) {
    if (message.photo) {
      return [await Theme.getPhotoURL(message.photo, ctx)];
    }

    if ((message as MessageAnimation).animation) {
      return [await Theme.getAnimation(message as MessageAnimation, ctx)];
    }

    return null;
  }

  public static async fromChannelMessage(
    message: Message,
    ctx: ContextMessageUpdate
  ) {
    const text = Theme.getDescription(message, ctx);
    const images = await Theme.getImages(message, ctx);

    return {
      name: Theme.getMainSentence(text),
      desc: text,
      pos: ThemePosition.TOP,
      images
    };
  }
}
