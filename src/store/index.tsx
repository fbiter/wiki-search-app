import React, {useReducer} from 'react'
import rootReducer from './reducers'
import {StoreContext} from '../context'
import {
  fetchCategories,
  fetchArticlesByCategory,
  searchArticles,
  fetchSubcategories
} from '../services'
import {changePrefix} from './functions'

export default props => {
  const [state, dispatch] = useReducer(rootReducer, {
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
      searchTerm: [''],
      searchType: 'categories',
      selection: []
    }
  })

  const Store = {
    state: {
      categories: state.categories,
      subcategories: state.subcategories,
      articles: state.articles,
      config: state.config
    },

    dispatch: dispatch,

    newCategorySearchTerm: term => {
      dispatch({type: 'SET_CATEGORY_SEARCH_TERM', searchTerm: term})

      if (term.length > 0) {
        fetchCategories(term).then(res =>
          dispatch({type: 'SET_CATEGORIES', items: res})
        )
      } else {
        dispatch({type: 'CLEAR_CATEGORIES'})
      }
    },

    newSubcategorySearchTerm: term => {
      dispatch({type: 'SET_SUBCATEGORY_SEARCH_TERM', searchTerm: term})
    },

    getSubcategories: cat => {
      fetchSubcategories(cat).then(res =>
        dispatch({type: 'SET_CATEGORIES', items: res})
      )
    },

    newArticleSearchTerm: (term, cat) => {
      dispatch({type: 'SET_ARTICLE_SEARCH_TERM', searchTerm: term})

      if (term.length > 0) {
        console.log(this)

        fetchArticlesByCategory(term, cat).then(res =>
          dispatch({type: 'SET_ARTICLES', items: res})
        )
      } else {
        dispatch({type: 'CLEAR_ARTICLES'})
      }
    },

    selectCategory(cat, searchParameter) {
      dispatch({type: 'SELECT_CATEGORY', item: {name: cat}})
      if (searchParameter === 'subcategories') {
        fetchSubcategories(cat).then(res => {
          dispatch({type: 'SET_SUBCATEGORIES', items: res})
        })
      } else {
        fetchArticles(cat).then(res => {
          dispatch({type: 'SET_SUBCATEGORIES', items: res})
        })
      }
      dispatch({type: 'SET_SEARCH_PARAMETERS', value: searchParameter})
    },
    selectSubcategory(subCat) {
      dispatch({type: 'SELECT_SUBCATEGORY', item: {name: subCat}})
      fetchSubcategories(subCat).then(res => {
        dispatch({type: 'SET_SUBCATEGORIES', items: res})
        dispatch({type: 'CLEAR_SEARCHTERM'})
      })
    },
    selectArticle(art) {
      dispatch({type: 'SELECT_ARTICLE', item: {name: art}})
    }
  }

  return (
    <StoreContext.Provider value={Store}>
      {props.children}
    </StoreContext.Provider>
  )
}
