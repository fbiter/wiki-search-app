// this object is used in 2 places:
// (1) - as a defaultValue in React.createContext's argument
// (2) - as an initialState in  useReducer's argument

export default {
  categories: {
    data: []
  },
  subcategories: {
    data: []
  },
  articles: {
    data: []
  },
  config: {
    searchTerm: '',
    listSize: 10,
    startSelection: {title: '', searchType: 'categories'},
    selectionHistory: []
  }
}
