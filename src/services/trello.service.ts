import config from 'config';
import got from 'got';
import FormData from 'form-data';

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
  static async addTheme({
    name,
    desc,
    pos = ThemePosition.TOP,
    images
  }: ITheme) {
    const {body: response} = await got('https://api.trello.com/1/cards', {
      method: 'POST',
      responseType: 'json',
      json: {
        idList: config.trello.themesList,
        key: config.trello.key,
        token: config.trello.token,
        name,
        desc,
        pos
      }
    });

    const { id } = response as any;

    if (images) {
      for (let image of images) {
        const formData = new FormData();
        const imageUrl = image.toString();
        const response = await got(imageUrl);
        formData.append('file', response.rawBody, {
          filename: 'cover.jpg',
          contentType: 'application/octet-stream'
        });

        await got(`https://api.trello.com/1/cards/${id}/attachments`, {
          method: 'POST',
          searchParams: {
            key: config.trello.key,
            token: config.trello.token
          },
          body: formData
        });
      }
    }

    return response;
  }
}
