import React, {createContext} from 'react'

export const StoreContext = createContext({
  state: {
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
    config: {
      searchTerm: [],
      searchType: '',
      selection: []
    }
  },
  dispatch: arg1 => {},
  newCategorySearchTerm: (prefix: string) => {},
  newSubcategorySearchTerm: (term: string) => {},
  newArticleSearchTerm: (prefix, cat) => {},
  selectCategory: cat => {},
  selectSubcategory: cat => {},
  selectArticle: art => {}
})
