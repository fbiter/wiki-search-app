import {apiEndpoint, artsByCatQuery} from './settings'

export default (config): Promise<string[]> => {
  if (!config.searchTerm) return Promise.resolve([])
  const url =
    apiEndpoint +
    artsByCatQuery +
    `&cmtitle=Category:${config.selection.slice(-1)[0].title}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.categorymembers.map(a => a.title))
}
