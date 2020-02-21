export interface ISiteService {
  getContent: (URL: string) => Promise<string>;
}
