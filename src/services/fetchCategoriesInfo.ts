import {apiEndpoint, catInfoQuery} from './settings'

export default (data: string[]): Promise<string[]> => {
  const titlesProp = data
    .map(d => 'Category:' + d)
    .join('|')
    .replace(/&/g, '%26')
  const url = apiEndpoint + catInfoQuery + '&titles=' + titlesProp
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.pages)
    .then(res => {
      return Object.entries(res).map((r: object) => ({
        title: r[1].title.slice(9),
        subcats: r[1].categoryinfo.subcats,
        pages: r[1].categoryinfo.pages
      }))
    })
    .catch(err => err)
}
