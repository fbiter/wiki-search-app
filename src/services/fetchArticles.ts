import {apiEndpoint, artQuery} from './settings'
import {Item} from '../TypeDeclarations'
import {convertToLink} from './utils'

export default (config): Promise<Item[]> => {
  if (!config) return Promise.resolve([])
  const url =
    apiEndpoint +
    artQuery +
    `&search=${config.searchTerm}` +
    `&limit=${config.listSize}`
  return fetch(url)
    .then(res => res.json())
    .then((res: Resource) =>
      res[1].map(a => {
        return {
          title: a,
          link: convertToLink(a, 'article')
        }
      })
    ) as Promise<Item[]>
}

type Resource = [string, string[]]
