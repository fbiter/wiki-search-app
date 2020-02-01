import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'

export default () => {
  const store = useContext(StoreContext)
  const handleChange = function(e) {
    console.log(e.target.value)
    store.changePrefix(e.target.value)
  }
  console.log(store)
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="SEARCH CATEGORIES"
        value={store.data.prefix}
      />
      {store.data.categories.map(c => (
        <Card id={c} label={c} handleClick={store.selectCategory} />
      ))}
    </>
  )
}
