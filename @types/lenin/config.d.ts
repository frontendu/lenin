declare module 'config' {
  type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

  const config: {
    telegram: {
      launch: object;
      token: string;
    };
    trello: {
      key: string;
      token: string;
      themesList: string;
    };
  };

  export type Config = RecursivePartial<typeof config>;

  export default config;
}
