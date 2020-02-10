export default (state, action) => 
  switch (action.type) {
    case 'ADD_TO_SELECTION':
      return {
        ...state,
        selectionHistory: [
          ...state.selectionHistory,
          {title: action.title, searchType: action.searchType}
        ]
      }
    case 'UPDATE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'CHANGE_LIST_SIZE':
      return {
        ...state,
        listSize: action.listSize
      }
    case 'EDIT_SELECTION': {
      const index = state.selectionHistory.findIndex(
        s => s.title === action.title
      )
      const newSelection = state.selectionHistory.slice(0, index)
      if (index !== -1) {
        return {
          ...state,
          selectionHistory: newSelection
        }
      } else {
        return state
      }
    }
    case 'NEW_SELECTION':
      return {
        ...state,
        selection: [
          ...state.selectionHistory,
          {
            title: action.title,
            searchType: action.searchType
          }
        ]
      }
    default:
      return state
  }
}
