import React, {useContext} from 'react'
import {ArticleList, CategoryList} from '../components'
import {StoreContext} from '../context'
import {selectCurConfig} from '../store/selectors'
import useFetch from '../hooks/useFetch'
import SearchForm from '../components/SearchForm'
import Breadcrumbs from '../components/Breadcrumbs'

export default function SearchPage() {
  const {state, dispatch} = useContext(StoreContext)
  const curConfig = selectCurConfig(state)
  const {searchType, searchTerm} = curConfig

  useFetch(curConfig, dispatch)

  return (
    <>
      <SearchForm />

      {/* Conditional rendering */}

      {searchType !== 'categories' && <Breadcrumbs />}

      {searchType === 'categories' && searchTerm.length > 0 && <CategoryList />}

      {searchType === 'subcategories' && <CategoryList />}

      {searchType === 'articles' &&
        (state.config.startSelection.searchType === 'articles'
          ? searchTerm.length > 0
          : true) && <ArticleList />}
    </>
  )
}
