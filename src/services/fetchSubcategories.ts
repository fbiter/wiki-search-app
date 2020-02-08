import {apiEndpoint, subcatQuery} from './settings'

export default (config): Promise<string[]> => {
  const url = apiEndpoint + subcatQuery + `&cmtitle=Category:${config.title}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.categorymembers.map(c => c.title.slice(9)))
}
