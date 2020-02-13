import {apiEndpoint, artQuery} from './settings'

export default (config): Promise<string[]> => {
  if (!config) return Promise.resolve([])
  const url =
    apiEndpoint +
    artQuery +
    `&search=${config.searchTerm}` +
    `&limit=${config.listSize}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res[1])
}
