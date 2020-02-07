export function setCategories(categories: string[]) {
  return {
    type: 'SET_CATEGORIES',
    categories: categories
  }
}

export function updateSearchTerm(searchTerm: string) {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm: searchTerm
  }
}

export function updateDataDetails(dataDetails) {
  return {
    type: 'UPDATE_DATA_DETAILS',
    dataDetails: dataDetails
  }
}

export function updateSubcategoryDetails(dataDetails) {
  return {
    type: 'UPDATE_SUBCATEGORY_DETAILS',
    dataDetails: dataDetails
  }
}

export function setSubcategories(subcategories) {
  return {
    type: 'SET_SUBCATEGORIES',
    subcategories: subcategories
  }
}
export function setArticles(articles) {
  return {
    type: 'SET_ARTICLES',
    articles: articles
  }
}

export function setSearchType(searchType: string) {
  return {
    type: 'SET_SEARCH_TYPE',
    searchType: searchType
  }
}

export function addToSelection(category) {
  return {
    type: 'ADD_TO_SELECTION',
    category: category
  }
}

export function newSearchTerm(searchTerm: string) {
  return {
    type: 'NEW_SEARCH_TERM',
    searchTerm: searchTerm
  }
}

export function changeListSize(listSize: number) {
  return {
    type: 'CHANGE_LIST_SIZE',
    listSize: listSize
  }
}
