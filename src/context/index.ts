import React, {createContext} from 'react'
import initialValue from '../store/initialValue'

export const StoreContext = createContext({
  state: initialValue,
  dispatch: arg1 => {}
})
