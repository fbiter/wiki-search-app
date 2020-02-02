export default (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        data: action.items
      }
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selection: [...state.selection, action.item]
      }
    case 'CLEAR_CATEGORY_SELECTION':
      return {
        ...state,
        selection: []
      }
    case 'CLEAR_CATEGORIES':
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}
