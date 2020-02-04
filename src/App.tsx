import React from 'react'
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
