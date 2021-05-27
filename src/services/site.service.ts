import got from 'got';

const CRAWLER_HEADER = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

export class SiteService {
  public async getContent(url: string) {
    return (await got(url, { headers: { 'User-Agent': CRAWLER_HEADER } })).body;
  }
}
