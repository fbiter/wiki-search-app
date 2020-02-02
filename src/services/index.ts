// request variables
const apiEndpoint = 'https://en.wikipedia.org/w/api.php'
const catQuery = 'action=opensearch&namespace=14&limit=10&format=json&origin=*'
// 'action=query&list=allcategories&aclimit=10&acprop=size|hidden&acmin=150&acprefix=w&format=json&origin=*'
const subcatQuery =
  'action=query&list=categorymembers&cmlimit=500&cmtype=subcat&format=json&origin=*'
const artsByCatQuery =
  'action=query&list=categorymembers&cmlimit=500&cmtype=page&format=json&origin=*'
// const articles = `action=query&list=allpages&apprefix=${apprefix}&aplimit=10&format=json&origin=*`

// request functions
export function searchCategories(searchTerm: string) {
  if (!searchTerm) return Promise.resolve([])
  const url = apiEndpoint + '?' + catQuery + `&search=Category:${searchTerm}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res[1].map(c => c.slice(9)))
}

export function fetchSubcategories(catTitle: string) {
  const url = apiEndpoint + '?' + subcatQuery + `&cmtitle=Category:${catTitle}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res.query.categorymembers.map(c => c.title.slice(9)))
}

export function searchArticlesByCategory(searchTerm: string, catTitle: string) {
  if (!searchTerm) return Promise.resolve([])
  const url =
    apiEndpoint + '?' + artsByCatQuery + `&cmtitle=Category:${catTitle}`
  return fetch(url).then(res => res.json())
}

export function searchArticles(prefix: string) {
  const url =
    apiEndpoint + '?' + artsByCatQuery + prefix ? `&acprefix=${prefix}` : ''
  return fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
}
