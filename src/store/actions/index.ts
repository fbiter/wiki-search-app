export function setCategories(categories) {
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
