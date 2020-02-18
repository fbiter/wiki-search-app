export function updateSearchTerm(searchTerm: string) {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm: searchTerm
  }
}

export function addToSelection(
  title: string,
  searchType: 'subcategories' | 'articles'
) {
  return {
    type: 'ADD_TO_SELECTION',
    title: title,
    searchType
  }
}

export function changeListSize(listSize: number) {
  return {
    type: 'CHANGE_LIST_SIZE',
    listSize: listSize
  }
}

export function changeSelection(title: string) {
  return {
    type: 'EDIT_SELECTION',
    title
  }
}

export function setStartSearchType(searchType: 'categories' | 'articles') {
  return {
    type: 'SET_START_SEARCH_TYPE',
    searchType
  }
}
