export default (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLE_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case 'SET_ARTICLES': {
      const link = function() {
        return 'https://en.wikipedia.org/wiki/' + this.title.replace(/ /g, '_')
      }
      return {
        ...state,
        data: action.articles.map(a => ({
          title: a,
          get link() {
            return link.call(this)
          }
        }))
      }
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
