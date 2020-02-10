import {apiEndpoint, catQuery} from './settings'

export default (config): Promise<string[]> => {
  if (!config) return Promise.resolve([])
  const url =
    apiEndpoint +
    catQuery +
    `&search=Category:${config.searchTerm}` +
    `&limit=${config.listSize}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res[1].map(c => c.slice(9)))
}
