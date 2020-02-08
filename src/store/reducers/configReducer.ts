export default (state, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_TO_SELECTION': {
      // const newSelection = state.selection.slice()
      // newSelection[newSelection.length - 1].title = action.title
      return {
        ...state,
        selectionHistory: [
          ...state.selectionHistory,
          {title: action.title, searchType: action.searchType}
        ]
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
