import React, {useReducer} from 'react'
import rootReducer from './reducers'
import {StoreContext} from '../context'
import {searchCategories} from '../services'
import {changePrefix} from './functions'

export default props => {
  const [data, dispatch] = useReducer(rootReducer, {
    prefix: '',
    categories: [],
    selectedCategory: ''
  })
  const Store = {
    data,

    changePrefix: prefix => {
      dispatch({type: 'SET_PREFIX', prefix: prefix})

      if (prefix.length > 0) {
        searchCategories(prefix).then(res =>
          dispatch({type: 'SET_CATEGORIES', categories: res})
        )
      } else {
        dispatch({type: 'SET_CATEGORIES', categories: []})
      }
    },

    selectCategory(cat) {
      dispatch({type: 'SELECT_CATEGORY', category: cat})
    }
  }
  return (
    <StoreContext.Provider value={Store}>
      {props.children}
    </StoreContext.Provider>
  )
}
