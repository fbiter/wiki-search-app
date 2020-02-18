import {createContext} from 'react'
import {initialValue} from '../store/initialValue'
import {StateInterface} from '../TypeDeclarations'

export const StoreContext = createContext<{
  state: StateInterface
  dispatch: (arg1) => any
}>({
  state: initialValue,
  dispatch: arg1 => {}
})
