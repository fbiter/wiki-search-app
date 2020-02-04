import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'
import {selectCurSeacrhTerm} from '../store/selectors'
import {
  updateSearchTerm,
  addToSelection,
  newSearchTerm,
  setSearchType
} from '../store/actions'

export default () => {
  const {state, dispatch} = useContext(StoreContext)
  const handleChange = function(e) {
    dispatch(updateSearchTerm(e.target.value))
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="SEARCH CATEGORIES"
        value={selectCurSeacrhTerm(state)}
      />
      {state.categories.data.length
        ? state.categories.data.map(c => (
            <Card
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
          ))
        : ''}
    </>
  )
}
