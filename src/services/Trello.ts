import config from 'config';
import request from 'request';
import requestP from 'request-promise-native';

export enum ThemePosition {
  TOP = 'top',
  BOTTOM = 'bottom'
}

interface ITheme {
  name: string;
  desc: string;
  images?: string[] | null;
  pos?: ThemePosition;
}

export class TrelloService {
  private static async getSiteTitle(site: string) {
    const ogTitleRe = /<meta\sproperty="og:title"\scontent="(.*)">/;
    const titleRe = /<title>(.*)<\/title>/;

    try {
      const body = await requestP({url: site});
      const ogTitle = ogTitleRe.exec(body);
      const title = titleRe.exec(body);

      return ogTitle || title;
    } catch (e) {
      console.error(e.message);
      return 'Без названия';
    }
  }

  static async addTheme({
    name,
    desc,
    pos = ThemePosition.TOP,
    images
  }: ITheme) {
    const onlyURLRe = /^https?:\/\/[^\s]+$/
    const fullName = onlyURLRe.test(name.trim())
      ? await TrelloService.getSiteTitle(name)
      : name;

    const response = await requestP({
      method: 'POST',
      baseUrl: 'https://api.trello.com',
      url: '/1//cards',
      json: true,
      body: {
        idList: config.trello.themesList,
        key: config.trello.key,
        token: config.trello.token,
        name: fullName,
        desc,
        pos
      }
    });

    const { id } = response;

    if (images) {
      for (let image of images) {
        const formData = {
          file: request(image)
        };

        request({
          method: 'POST',
          baseUrl: 'https://api.trello.com',
          url: `/1/cards/${id}/attachments`,
          qs: {
            key: config.trello.key,
            token: config.trello.token
          },
          formData
        });
      }
    }

    return response;
  }
}
