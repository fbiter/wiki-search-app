import React from 'react'
import {useReducer} from 'react'
import {rootReducer} from './reducers'
import {StoreContext} from '../context'
import initialValue from './initialValue'

// Store
export default function Store(props) {
  const [state, dispatch] = useReducer(rootReducer, initialValue)

  const Store = {
    state,
    dispatch
  }

  return (
    <StoreContext.Provider value={Store}>
      {props.children}
    </StoreContext.Provider>
  )
}
