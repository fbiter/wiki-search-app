import React, {useContext} from 'react'
import {StoreContext} from '../context'
import CategoryRow from './CategoryRow'
import {addToSelection, newSearchTerm, setSearchType} from '../store/actions'
import ListLayout from '../layouts/ListLayout'

export default props => {
  const {dispatch} = useContext(StoreContext)
  const {data} = props
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
