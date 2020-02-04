export default (state, action) => {
  switch (action.type) {
    case 'SET_SUBCATEGORIES': {
      const link = function() {
        return (
          'https://en.wikipedia.org/wiki/Category:' +
          this.title.replace(/ /g, '_')
        )
      }
      return {
        ...state,
        data: action.subcategories.map(c => ({
          title: c,
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
