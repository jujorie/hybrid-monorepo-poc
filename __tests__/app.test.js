import { App } from '@/app'

describe('App', () => {
  it('must be defined', () => {
    const a = new App()
    expect(a).toBeDefined()
  })

  it('must call render', () => {
    const a = new App()
    a.render()
    expect(a).toBeDefined()
  })
})
