import React, {createContext} from 'react'

export const StoreContext = createContext({
  data: {
    prefix: '',
    categories: [],
    selectedCategory: ''
  },
  changePrefix: prefix => {},
  selectCategory: cat => {}
})
