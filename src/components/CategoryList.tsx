import React, {useContext} from 'react'
import {StoreContext} from '../context'
import CategoryRow from './CategoryRow'
import {addToSelection, updateSearchTerm} from '../store/actions'
import {ListLayout} from '../layouts'

export default function CategoryList(props) {
  const {state, dispatch} = useContext(StoreContext)
  const {data} = props

  return (
    <ListLayout labels={['Title', 'Subcategories', 'Articles']}>
      {data.map(c => (
        <CategoryRow
          key={c.title}
          item={c}
          handleSubcatClick={item => {
            dispatch(addToSelection(item.title, 'subcategories'))
            dispatch(updateSearchTerm(''))
          }}
          handleArticleClick={item => {
            dispatch(addToSelection(item.title, 'articles'))
            dispatch(updateSearchTerm(''))
          }}
        />
      ))}
    </ListLayout>
  )
}
