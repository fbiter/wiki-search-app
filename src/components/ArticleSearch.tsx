import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'
import {selectCurSeacrhTerm, selectFilteredArticles} from '../store/selectors'
import {updateSearchTerm} from '../store/actions'

export default function() {
  const {state, dispatch} = useContext(StoreContext)
  const handleChange = function(e) {
    dispatch(updateSearchTerm(e.target.value))
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="SEARCH ARTICLES"
        value={selectCurSeacrhTerm(state)}
      />
      {selectFilteredArticles(state).map(c => (
        <Card
          key={c.title}
          id={c}
          item={c}
          title={c.title}
          handleClick={() => {}}
        />
      ))}
    </>
  )
}
