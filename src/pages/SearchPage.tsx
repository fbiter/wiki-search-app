import React, {useContext, useEffect} from 'react'
import CategorySearch from '../components/CategorySearch'
import {StoreContext} from '../context'
import ArticleSearch from '../components/ArticleSearch'
import SubcategorySearch from '../components/SubcategorySearch'
import store from '../store'
import {
  fetchCategories,
  fetchSubcategories,
  fetchArticlesByCategory
} from '../services'
import {setCategories, setSubcategories, setArticles} from '../store/actions'

export default function() {
  const {state, dispatch} = useContext(StoreContext)
  // ako se promjeni searchParameter ili searchTerm -> fetch
  console.log(state)
  useEffect(() => {
    // fetch operations here:
    if (state.config.searchType === 'categories') {
      if (state.config.searchTerm.slice(-1)[0].length > 0) {
        fetchCategories(state.config).then(res => dispatch(setCategories(res)))
      } else {
        dispatch(setCategories([]))
      }
    } else if (
      state.config.searchType === 'subcategories' &&
      state.config.searchTerm.slice(-1)[0].length === 0
    ) {
      fetchSubcategories(state.config).then(res =>
        dispatch(setSubcategories(res))
      )
    } else if (state.config.searchTerm.slice(-1)[0].length === 0) {
      fetchArticlesByCategory(state.config).then(res =>
        dispatch(setArticles(res))
      )
    }
  }, [state.config.searchTerm, state.config.searchType, state.config.selection])
  return (
    <>
      {state.config.searchType === 'categories' && <CategorySearch />}
      {state.config.searchType === 'subcategories' && <SubcategorySearch />}
      {state.config.searchType === 'articles' && <ArticleSearch />}
    </>
  )
}
