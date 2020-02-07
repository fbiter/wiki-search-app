export default (state, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_TO_SELECTION': {
      return {
        ...state,
        selection: [...state.selection, action.category]
      }
    }
    case 'NEW_SEARCH_TERM':
      return {
        ...state,
        searchTerm: [...state.searchTerm, action.searchTerm]
      }
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: [...state.searchTerm.slice(0, -1), action.searchTerm]
      }
    case 'SET_SEARCH_TYPE':
      return {
        ...state,
        searchType: action.searchType
      }
    case 'CHANGE_LIST_SIZE':
      return {
        ...state,
        listSize: action.listSize
      }
    default:
      return state
  }
}
