import {apiEndpoint, catQuery} from './settings'
import {Item, CurConfig} from '../TypeDeclarations'
import {convertToLink} from './utils'

interface Resource {
  query: {
    pages: {
      title: string
      categoryinfo: {
        subcats: number
        pages: number
      }
    }[]
  }
}

export default (config: CurConfig): Promise<Item[]> => {
  const url =
    apiEndpoint +
    catQuery +
    '&gpsnamespace=14' +
    `&gpssearch=${config.searchTerm}` +
    `&gpslimit=${config.listSize}`
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((res: Resource) =>
      Object.entries(res.query.pages).map(e => ({
        title: e[1].title.slice(9),
        link: convertToLink(e[1].title.slice(9), 'category'),
        sizes: {
          subcats: e[1].categoryinfo.subcats,
          articles: e[1].categoryinfo.pages
        }
      }))
    ) as Promise<Item[]>
}
