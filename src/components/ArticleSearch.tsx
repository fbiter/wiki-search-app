import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './Card'

export default function() {
  const store = useContext(StoreContext)
  const handleChange = function(e) {
    store.newArticleSearchTerm(e.target.value, store.subcategories)
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        value={store.articles.searchTerm}
        placeholder="SEARCH ARTICLES"
      />
      {store.articles.data.map(c => (
        <Card id={c} label={c} handleClick={store.selectArticle} />
      ))}
    </>
  )
}
