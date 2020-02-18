import {apiEndpoint, subcatQuery} from './settings'
import {Item} from '../TypeDeclarations'
import {convertToLink} from './utils'

export default (title: string): Promise<Item[]> => {
  const url = apiEndpoint + subcatQuery + `&gcmtitle=Category:${title}`
  return fetch(url)
    .then(res => res.json())
    .then((res: Resource) =>
      Object.entries(res.query.pages).map(e => ({
        title: e[1].title.slice(9),
        link: convertToLink(e[1].title, 'category'),
        sizes: {
          subcats: e[1].categoryinfo.subcats,
          articles: e[1].categoryinfo.pages
        }
      }))
    ) as Promise<Item[]>
}

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
