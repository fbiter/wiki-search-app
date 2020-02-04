import React, {useContext} from 'react'
import {StoreContext} from '../context'
import CategoryCard from './CategoryCard'
import {addToSelection, newSearchTerm, setSearchType} from '../store/actions'

export default () => {
  const {state, dispatch} = useContext(StoreContext)
  return (
    <>
      {state.categories.data.map(c => (
        <CategoryCard
          key={c.title}
          item={c}
          link={c.link}
          title={c.title}
          handleClick={() => {
            dispatch(addToSelection(c))
            dispatch(setSearchType('subcategories'))
            dispatch(newSearchTerm(''))
          }}
        />
      ))}
    </>
  )
}
