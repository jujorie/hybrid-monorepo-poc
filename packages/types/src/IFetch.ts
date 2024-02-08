export interface IFetchConfig {
  url: string
  header?: Record<string, any>
}

export interface IFetch {
  fetch: (config: IFetchConfig) => object
}
