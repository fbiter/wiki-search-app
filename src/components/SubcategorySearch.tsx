import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'

export default () => {
  const store = useContext(StoreContext)
  const handleChange = function(e) {
    store.newSubcategorySearchTerm(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="SEARCH SUBCATEGORIES"
        value={store.subcategories.searchTerm}
      />
      {store.subcategories.data.map(s => (
        <Card key={s} id={s} label={s} handleClick={store.selectSubcategory} />
      ))}
    </>
  )
}
