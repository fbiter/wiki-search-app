export default (state, action) => {
  switch (action.type) {
    case 'SET_SUBCATEGORY_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm,
        data: state.data.filter(w => {
          w.indexOf(action.searchTerm) !== -1
        })
      }
    case 'SET_SUBCATEGORIES':
      return {
        ...state,
        data: action.items
      }
    case 'SELECT_SUBCATEGORY':
      return {
        ...state,
        selection: [...state.selection, action.item]
      }
    case 'CLEAR_SUBCATEGORY_SELECTION':
      return {
        ...state,
        selection: []
      }
    case 'CLEAR_SUBCATEGORIES':
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}
