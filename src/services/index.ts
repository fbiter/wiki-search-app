// request variables
const apiEndpoint = 'https://en.wikipedia.org/w/api.php'
const catQuery = '?action=opensearch&namespace=14&limit=10&format=json&origin=*'
// 'action=query&list=allcategories&aclimit=10&acprop=size|hidden&acmin=150&acprefix=w&format=json&origin=*'
const subcatQuery =
  '?action=query&list=categorymembers&cmlimit=500&cmtype=subcat&format=json&origin=*'
const artsByCatQuery =
  '?action=query&list=categorymembers&cmlimit=500&cmtype=page&format=json&origin=*'

const infoQuery = '?action=query&prop=categoryinfo&format=json&origin=*'
// const articles = `action=query&list=allpages&apprefix=${apprefix}&aplimit=10&format=json&origin=*`

// REQUEST FUNCTIONS
export function fetchCategories(config: object) {
  if (!config) return Promise.resolve([])
  const url =
    apiEndpoint + catQuery + `&search=Category:${config.searchTerm.slice(-1)}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res[1].map(c => c.slice(9)))
}

export function fetchCategoriesInfo(data: Array<object>) {
  const titlesProp = data
    .map(d => 'Category:' + d)
    .join('|')
    .replace(/&/g, '%26')
  const url = apiEndpoint + infoQuery + '&titles=' + titlesProp
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.pages)
    .then(res => {
      return Object.entries(res).map(r => ({
        title: r[1].title.slice(9),
        subcats: r[1].categoryinfo.subcats,
        pages: r[1].categoryinfo.pages
      }))
    })
    .catch(err => console.log('fetch error:', err))
}

export function fetchSubcategories(config: object) {
  const url =
    apiEndpoint +
    subcatQuery +
    `&cmtitle=Category:${config.selection.slice(-1)[0].title}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.categorymembers.map(c => c.title.slice(9)))
}

export function fetchArticlesByCategory(config: object) {
  if (!config.searchTerm) return Promise.resolve([])
  const url =
    apiEndpoint +
    artsByCatQuery +
    `&cmtitle=Category:${config.selection.slice(-1)[0].title}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.categorymembers.map(a => a.title))
}
