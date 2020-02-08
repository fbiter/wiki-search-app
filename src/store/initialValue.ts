// this object is used 2 times:
// (1) - as a defaultValue in React.createContext's argument
// (2) - as an initialState in  useReducer's argargument

export default {
  categories: {
    searchTerm: '',
    data: [],
    selection: []
  },
  subcategories: {
    searchTerm: '',
    data: [],
    selection: []
  },
  articles: {
    searchTerm: '',
    data: [],
    selection: []
  },
  config: {
    searchTerm: [''],
    listSize: 10,
    searchType: 'categories',
    startSelection: {title: '', searchType: 'categories'},
    selectionHistory: []
  }
}
