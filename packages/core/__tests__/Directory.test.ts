import { Directory } from '../src/Directory'
import { Fetcher } from '../src/Fetcher'

describe('Test directory', () => {
  it('Must exist', () => {
    const d = new Directory(new Fetcher())
    expect(d).toBeDefined()
  })
})
