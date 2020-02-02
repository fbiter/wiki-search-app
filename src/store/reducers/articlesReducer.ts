export default (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'SET_ARTICLES':
      return {
        ...state,
        data: action.items
      }
    case 'SELECT_ARTICLE':
      return {
        ...state,
        selection: [...state.selection, action.item]
      }
    case 'CLEAR_ARTICLE_SELECTION':
      return {
        ...state,
        selection: []
      }
    case 'CLEAR_ARTICLES':
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}
