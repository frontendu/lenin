import axios from 'axios';
import config from 'config';
import FormData from 'form-data';
import request from 'request';

const trelloClientAPI = axios.create({
  baseURL: 'https://api.trello.com/1/'
});

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
    const response = await trelloClientAPI({
      method: 'POST',
      url: '/cards',
      data: {
        idList: config.trello.themesList,
        key: config.trello.key,
        token: config.trello.token,
        name,
        desc,
        pos
      }
    });

    const {
      data: { id }
    } = response;

    if (images) {
      for (let image of images) {
        const formData = {
          file: (await axios({
            method: 'GET',
            url: image,
            responseType: 'stream'
          })).data
        };

        await request({
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
