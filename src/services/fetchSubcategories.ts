import {apiEndpoint, subcatQuery} from './settings'

export default (config): Promise<{}> => {
  const url = apiEndpoint + subcatQuery + `&gcmtitle=Category:${config.title}`
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
