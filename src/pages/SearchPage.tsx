import React, {useContext} from 'react'
import {ArticleList, CategoryList} from '../components'
import {StoreContext} from '../context'
import {
  selectFilteredSubcategories,
  selectFilteredArticles,
  selectCurConfig
} from '../store/selectors'
import useFetch from '../hooks/useFetch'
import SearchForm from '../components/SearchForm'
import Breadcrumbs from '../components/Breadcrumbs'

export default function SearchPage() {
  const {state, dispatch} = useContext(StoreContext)
  const curConfig = selectCurConfig(state)
  const {searchType, listSize} = curConfig

  useFetch(state, curConfig, dispatch)

  return (
    <>
      <SearchForm />
      {searchType !== 'categories' && <Breadcrumbs />}

      {searchType === 'categories' && (
        <CategoryList
          data={state.categories.data.slice(0, state.config.listSize)}
        />
      )}

      {searchType === 'subcategories' && (
        <CategoryList
          data={selectFilteredSubcategories(state).slice(0, listSize)}
        />
      )}

      {searchType === 'articles' && (
        <ArticleList data={selectFilteredArticles(state).slice(0, listSize)} />
      )}
    </>
  )
}
