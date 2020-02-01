import React from 'react'
import {searchCategories, searchArticlesByCategory} from './services'
import CategorySearch from './components/CategorySearch'
import Store from './store/index'
import './style/root'

export default () => {
  console.log(searchCategories('war'))
  // console.log(searchArticlesByCategory())
  return (
    <div>
      <Store>
        <h1>Heading here</h1>
        <CategorySearch />
      </Store>
    </div>
  )
}
