import React, {useContext} from 'react'
import CategorySearch from '../components/CategorySearch'
import {StoreContext} from '../context'
import ArticleSearch from '../components/ArticleSearch'
import SubcategorySearch from '../components/SubcategorySearch'

export default function() {
  const store = useContext(StoreContext)
  return (
    <>
      {store.categories.selection.length === 0 && <CategorySearch />}
      {store.categories.selection.length > 0 && <SubcategorySearch />}
    </>
  )
}
