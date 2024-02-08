import { type IDirectory, type IDirectoryResult, type IFetch } from '@poc/types'

export class Directory implements IDirectory {
  constructor (readonly fetcher: IFetch) { }

  getData (id: string): IDirectoryResult {
    this.fetcher.fetch({ url: id })
    return { url: id, data: 'test value' }
  }
}
