export default (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES': {
      // const link = function() {
      //   return (
      //     'https://en.wikipedia.org/wiki/Category:' +
      //     this.title.replace(/ /g, '_')
      //   )
      // }
      return {
        ...state,
        data: action.categories
      }
    }
    case 'UPDATE_DATA_DETAILS': {
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
