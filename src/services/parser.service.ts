import cheerio from 'cheerio';

import { ISiteService } from 'interfaces/site.interface';

export class ParserService {
  constructor(private readonly siteService: ISiteService) {}

  private async getTitleFromSite($: cheerio.Root) {
    return $('title').first().text();
  }

  private async getHeaderFromSite($: cheerio.Root) {
    return $('h1')
      .first()
      .text();
  }

  private async getMetaDescriptionFromSite($: cheerio.Root) {
    return $('meta[name="title"]').attr('content');
  }

  public async getSiteTitle(url: string) {
    const emptyTitle = '';

    try {
      const $ = cheerio.load(await this.siteService.getContent(url));
      const strategies = [
        this.getTitleFromSite,
        this.getHeaderFromSite,
        this.getMetaDescriptionFromSite
      ];

      for (const strategy of strategies) {
        const title = strategy($);

        if (title) {
          return title;
        }
      }
    } catch (e) {
      return emptyTitle;
    }
  }
}
