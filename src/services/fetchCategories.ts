import {apiEndpoint, catQuery} from './settings'

// REQUEST FUNCTIONS
export default (config): Promise<string[]> => {
  if (!config) return Promise.resolve([])
  const url =
    apiEndpoint + catQuery + `&search=Category:${config.searchTerm.slice(-1)}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res[1].map(c => c.slice(9)))
}
