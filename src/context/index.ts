import React, {createContext} from 'react'

export const StoreContext = createContext({
  categories: {
    searchTerm: '',
    data: [],
    selection: []
  },
  subcategories: {
    searchTerm: '',
    data: [],
    selection: []
  },
  articles: {
    searchTerm: '',
    data: [],
    selection: []
  },
  newCategorySearchTerm: (prefix: string) => {},
  newSubcategorySearchTerm: (term: string) => {},
  newArticleSearchTerm: (prefix, cat) => {},
  selectCategory: cat => {},
  selectSubcategory: cat => {},
  selectArticle: art => {}
})
