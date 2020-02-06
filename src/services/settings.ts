export const apiEndpoint = 'https://en.wikipedia.org/w/api.php'

export const catQuery =
  '?action=opensearch&namespace=14&limit=10&format=json&origin=*'

export const subcatQuery =
  '?action=query&list=categorymembers&cmlimit=500&cmtype=subcat&format=json&origin=*'

export const artsByCatQuery =
  '?action=query&list=categorymembers&cmlimit=500&cmtype=page&format=json&origin=*'

export const catInfoQuery =
  '?action=query&prop=categoryinfo&format=json&origin=*'
