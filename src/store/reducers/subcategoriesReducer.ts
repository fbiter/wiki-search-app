export default (state, action) => {
  switch (action.type) {
    case 'SET_SUBCATEGORIES':
      return {
        ...state,
        data: action.subcategories
      }
    default:
      return state
  }
}
