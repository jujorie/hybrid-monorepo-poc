import { type IFetch, type IFetchConfig } from '@poc/types'

export class Fetcher implements IFetch {
  fetch (config: IFetchConfig): object {
    return { url: config.url }
  }
}
