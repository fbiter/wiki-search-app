// request variables
const apiEndpoint = 'https://en.wikipedia.org/w/api.php'
const categoriesQuery =
  'action=opensearch&namespace=14&limit=10&format=json&origin=*'
// 'action=query&list=allcategories&aclimit=10&acprop=size|hidden&acmin=150&acprefix=w&format=json&origin=*'
const articlesByCategory =
  'action=query&list=categorymembers&cmtitle=Category:%20World%20War%20II%20prisoners%20of%20war%20held%20by%20Japan&cmlimit=10&format=json&origin=*'
// const articles = `action=query&list=allpages&apprefix=${apprefix}&aplimit=10&format=json&origin=*`

// request functions
export function searchCategories(prefix: string) {
  if (!prefix) return Promise.resolve([])
  const url = apiEndpoint + '?' + categoriesQuery + `&search=${prefix}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res[1].map(c => c.slice(9)))
}

export function searchArticlesByCategory(prefix: string) {
  const url =
    apiEndpoint + '?' + articlesByCategory + prefix ? `&acprefix=${prefix}` : ''
  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
}

export function searchArticles(prefix: string) {
  const url =
    apiEndpoint + '?' + articlesByCategory + prefix ? `&acprefix=${prefix}` : ''
  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
}
