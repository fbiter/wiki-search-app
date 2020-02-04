import React, {useContext, useEffect} from 'react'
import CategorySearch from '../components/CategoryList'
import {StoreContext} from '../context'
import ArticleSearch from '../components/ArticleList'
import SubcategorySearch from '../components/SubcategoryList'
import store from '../store'
import {
  fetchCategories,
  fetchSubcategories,
  fetchArticlesByCategory
} from '../services'
import {
  setCategories,
  setSubcategories,
  setArticles,
  updateSearchTerm
} from '../store/actions'
import {selectCurSeacrhTerm} from '../store/selectors'

export default function() {
  const {state, dispatch} = useContext(StoreContext)
  const handleChange = function(e) {
    dispatch(updateSearchTerm(e.target.value))
  }
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
      <input
        type="text"
        onChange={handleChange}
        placeholder="SEARCH CATEGORIES"
        value={selectCurSeacrhTerm(state)}
      />
      {state.config.searchType === 'categories' && <CategorySearch />}
      {state.config.searchType === 'subcategories' && <SubcategorySearch />}
      {state.config.searchType === 'articles' && <ArticleSearch />}
    </>
  )
}
