/**
 * Main App
 */

import { Directory, Fetcher } from '@poc/core'

export class App {
  render () {
    const fetcher = new Fetcher()
    const directory = new Directory(fetcher)
    const data = directory.getData('aa')
    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', `<div>${JSON.stringify(data)}</div>`)
  }
}
