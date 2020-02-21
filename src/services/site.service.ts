import got from 'got';

import { ISiteService } from 'interfaces/site.interface';

export class SiteService implements ISiteService {
  public async getContent(url: string) {
    return (await got(url)).body;
  }
}
