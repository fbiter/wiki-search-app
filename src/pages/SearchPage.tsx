import React, {useContext, useEffect} from 'react'
import CategoryList from '../components/CategoryList'
import {StoreContext} from '../context'
import ArticleList from '../components/ArticleList'
import '../style/searchPage.scss'
import {
  fetchCategories,
  fetchSubcategories,
  fetchArticlesByCategory,
  fetchCategoriesInfo
} from '../services'
import {
  setCategories,
  setSubcategories,
  setArticles,
  updateSearchTerm,
  updateDataDetails,
  updateSubcategoryDetails
} from '../store/actions'
import {
  selectCurSeacrhTerm,
  selectFilteredSubcategories,
  selectFilteredArticles
} from '../store/selectors'

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
        fetchCategories(state.config).then(res => {
          dispatch(setCategories(res))
          fetchCategoriesInfo(res).then(res2 => {
            console.log(res2)
            dispatch(updateDataDetails(res2))
          })
        })
      } else {
        dispatch(setCategories([]))
      }
    } else if (
      state.config.searchType === 'subcategories' &&
      state.config.searchTerm.slice(-1)[0].length === 0
    ) {
      fetchSubcategories(state.config).then(res => {
        dispatch(setSubcategories(res))
        fetchCategoriesInfo(res).then(res2 =>
          dispatch(updateSubcategoryDetails(res2))
        )
      })
    } else if (state.config.searchTerm.slice(-1)[0].length === 0) {
      fetchArticlesByCategory(state.config).then(res =>
        dispatch(setArticles(res))
      )
    }
  }, [state.config.searchTerm, state.config.searchType, state.config.selection])
  return (
    <>
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <label className="input-label" htmlFor="input-field">
          Search {state.config.searchType}
        </label>
        <input
          id="input-field"
          className="input-field"
          type="text"
          onChange={handleChange}
          placeholder="type here"
          value={selectCurSeacrhTerm(state)}
        />
      </form>
      {state.config.searchType === 'categories' && (
        <CategoryList data={state.categories.data} />
      )}
      {state.config.searchType === 'subcategories' && (
        <CategoryList data={selectFilteredSubcategories(state)} />
      )}
      {state.config.searchType === 'articles' && (
        <ArticleList data={selectFilteredArticles(state)} />
      )}
    </>
  )
}
