import { Config } from 'config';

module.exports = {
  telegram: {
    token: process.env.TG_API_TOKEN,
    chat: parseInt(process.env.TG_CHAT)
  },
  trello: {
    key: process.env.TRELLO_KEY,
    token: process.env.TRELLO_TOKEN,
    themesList: process.env.TRELLO_THEMES_LIST
  },
  patreon: {
    secret: process.env.PATREON_SECRET
  }
} as Config;
