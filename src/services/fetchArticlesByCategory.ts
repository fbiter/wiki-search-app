import {apiEndpoint, artsByCatQuery} from './settings'
import {convertToLink} from './utils'
import {Item} from '../TypeDeclarations'

export default (config): Promise<Item[]> => {
  if (!config) return Promise.resolve([])
  const url = apiEndpoint + artsByCatQuery + `&cmtitle=Category:${config.title}`
  return fetch(url)
    .then(res => res.json())
    .then(res =>
      res.query.categorymembers.map(a => {
        return {
          title: a.title,
          link: convertToLink(a.title, 'article')
        }
      })
    )
}
