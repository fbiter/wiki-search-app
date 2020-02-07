import React, {useContext, useEffect} from 'react'
import {StoreContext} from '../context'
import CategoryRow from './CategoryRow'
import {
  addToSelection,
  newSearchTerm,
  setSearchType,
  setCategories,
  setSubcategories
} from '../store/actions'
import {ListLayout} from '../layouts'
import {fetchCategoriesInfo} from '../services'
import useFetchCategoryInfo from '../hooks/useFetchCategoryInfo'

export default function CategoryList(props) {
  const {state, dispatch} = useContext(StoreContext)
  const {data} = props

  useFetchCategoryInfo(state, dispatch, data)

  return (
    <ListLayout labels={['Title', 'Subcategories', 'Articles']}>
      {data.map(c => (
        <CategoryRow
          key={c.title}
          item={c}
          handleSubcatClick={item => {
            dispatch(addToSelection(item))
            dispatch(setSearchType('subcategories'))
            dispatch(newSearchTerm(''))
          }}
          handleArticleClick={item => {
            dispatch(addToSelection(item))
            dispatch(setSearchType('articles'))
            dispatch(newSearchTerm(''))
          }}
        />
      ))}
    </ListLayout>
  )
}
