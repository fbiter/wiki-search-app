import {apiEndpoint, catQuery} from './settings'

export default (config): Promise<{}> => {
  if (!config) return Promise.resolve([])
  const url =
    apiEndpoint +
    catQuery +
    '&gpsnamespace=14' +
    `&gpssearch=${config.searchTerm}` +
    `&gpslimit=${config.listSize}`
  return fetch(url)
    .then(res => res.json())
    .then(res =>
      Object.entries(res.query.pages).map(e => ({
        title: e[1].title.slice(9),
        sizes: {
          subcats: e[1].categoryinfo.subcats,
          articles: e[1].categoryinfo.pages
        }
      }))
    )
}
