export default (state, action) => {
  switch (action.type) {
    case 'SET_PREFIX':
      return {
        ...state,
        prefix: action.prefix
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.categories
      }
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.category
      }
  }
}
