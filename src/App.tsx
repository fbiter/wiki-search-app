import React from 'react'
import {searchCategories, searchArticlesByCategory} from './services'
import CategorySearch from './components/CategorySearch'
import Store from './store/index'
import './style/root'
import {SearchPage} from './pages'

export default () => {
  // console.log(searchCategories('war'))
  // console.log(searchArticlesByCategory())
  return (
    <div>
      <Store>
        <h1>Heading here</h1>
        <SearchPage />
      </Store>
    </div>
  )
}
