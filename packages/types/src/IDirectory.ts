import { type IDirectoryResult } from './IDirectoryResult'
import { type IFetch } from './IFetch'

export interface IDirectory {
  readonly fetcher: IFetch
  getData: (id: string) => IDirectoryResult
}
