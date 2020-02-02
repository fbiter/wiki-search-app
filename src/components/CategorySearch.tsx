import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'

export default () => {
  const store = useContext(StoreContext)
  const handleChange = function(e) {
    store.newCategorySearchTerm(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="SEARCH CATEGORIES"
        value={store.categories.searchTerm}
      />
      {store.categories.data.length
        ? store.categories.data.map(c => (
            <Card key={c} id={c} label={c} handleClick={store.selectCategory} />
          ))
        : ''}
    </>
  )
}
