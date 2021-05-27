export default {
  telegram: {
    launch: process.env.NODE_ENV === 'production'
    ? ({
      webhook: {
        port: process.env.PORT,
        host: process.env.HOST,
        domain: process.env.TG_API_DOMAIN
      }
    })
    : ({
      polling: {
        timeout: 30,
        limit: 100
      }
    }),
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
}
