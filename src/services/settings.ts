// variables holding api request strings

export const apiEndpoint = 'https://en.wikipedia.org/w/api.php'

// export const catQuery =
//   '?action=query&generator=allcategories&prop=categoryinfo&format=json&origin=*'

export const catQuery =
  '?action=query&generator=prefixsearch&prop=categoryinfo&format=json&origin=*'

export const artQuery = '?action=opensearch&namespace=0&format=json&origin=*'

export const subcatQuery =
  '?action=query&generator=categorymembers&gcmlimit=500&gcmtype=subcat&prop=categoryinfo&format=json&origin=*'
//en.wikipedia.org/w/api.php?action=query&generator=categorymembers&gcmlimit=500&gcmtype=subcat&format=json&origin=*&gcmtitle=Category:War%20by%20medium&prop=categoryinfo

export const artsByCatQuery =
  '?action=query&list=categorymembers&cmlimit=500&cmtype=page&format=json&origin=*'

export const catInfoQuery =
  '?action=query&prop=categoryinfo&format=json&origin=*'
