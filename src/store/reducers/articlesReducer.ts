export default (state, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}
