import React, {useContext, useEffect} from 'react'
import {ArticleList, CategoryList} from '../components'
import {StoreContext} from '../context'
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
import useFetch from '../hooks/useFetch'

export default function SearchPage() {
  const {state, dispatch} = useContext(StoreContext)
  const handleChange = function(e) {
    dispatch(updateSearchTerm(e.target.value))
  }

  useFetch(state, dispatch)

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
