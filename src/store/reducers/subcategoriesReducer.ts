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
          ...c,
          get link() {
            return link.call(this)
          }
        }))
      }
    }
    case 'UPDATE_SUBCATEGORY_DETAILS': {
      const data = state.data.map(d => {
        return {
          ...d,
          ...action.dataDetails.filter(details => details.title === d.title)[0]
        }
      })
      return {
        ...state,
        data: data
      }
    }
    default:
      return state
  }
}
