import { ParserService } from 'services/parser.service';

import blog from './fixtures/blog';
import twitter from './fixtures/twitter';
import yandex from './fixtures/yandex';
import devto from './fixtures/devto';

class StubSiteService {
  constructor(private readonly content) {}

  async getContent() {
    return this.content;
  }
}

describe('ParserService', () => {
  [[blog, 'blog'], [twitter, 'twitter'], [yandex, 'yandex'], [devto, 'devto']].forEach(
    ([content, name]) => {
      it(`should properly renders ${name}`, async () => {
        expect(
          await new ParserService(new StubSiteService(content)).getSiteTitle(
            name
          )
        ).toMatchSnapshot();
      });
    }
  );
});
