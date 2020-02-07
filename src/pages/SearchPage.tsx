import React, {useContext} from 'react'
import {ArticleList, CategoryList} from '../components'
import {StoreContext} from '../context'
import {
  selectFilteredSubcategories,
  selectFilteredArticles
} from '../store/selectors'
import useFetch from '../hooks/useFetch'
import SearchForm from '../components/SearchForm'

export default function SearchPage() {
  const {state, dispatch} = useContext(StoreContext)

  useFetch(state, dispatch)

  return (
    <>
      <SearchForm />
      {state.config.searchType === 'categories' && (
        <CategoryList
          data={state.categories.data.slice(0, state.config.listSize)}
        />
      )}
      {state.config.searchType === 'subcategories' && (
        <CategoryList
          data={selectFilteredSubcategories(state).slice(
            0,
            state.config.listSize
          )}
        />
      )}
      {state.config.searchType === 'articles' && (
        <ArticleList
          data={selectFilteredArticles(state).slice(0, state.config.listSize)}
        />
      )}
    </>
  )
}
