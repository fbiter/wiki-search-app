export default (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        data: action.articles
      }
    default:
      return state
  }
}
