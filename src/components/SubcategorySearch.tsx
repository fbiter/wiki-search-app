import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'
import {
  selectFilteredSubcategories,
  selectCurSeacrhTerm
} from '../store/selectors'
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
        placeholder="SEARCH SUBCATEGORIES"
        value={selectCurSeacrhTerm(state)}
      />
      {selectFilteredSubcategories(state).map(s => (
        <Card
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
