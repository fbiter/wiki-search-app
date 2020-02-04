import React, {useContext} from 'react'
import {StoreContext} from '../context'
import CategoryCard from './CategoryCard'
import {selectFilteredSubcategories} from '../store/selectors'
import {addToSelection, newSearchTerm} from '../store/actions'

export default () => {
  const {state, dispatch} = useContext(StoreContext)
  return (
    <>
      {selectFilteredSubcategories(state).map(s => (
        <CategoryCard
          key={s.title}
          item={s}
          link={s.link}
          title={s.title}
          handleClick={() => {
            dispatch(addToSelection(s))
            dispatch(newSearchTerm(''))
          }}
        />
      ))}
    </>
  )
}
