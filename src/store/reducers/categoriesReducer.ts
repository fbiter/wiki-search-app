export default (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        data: action.categories
      }
    default:
      return state
  }
}
