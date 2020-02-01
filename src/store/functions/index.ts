export function changePrefix(prefix) {
  dispatch({type: 'SET_PREFIX', prefix: prefix})
  if (data.prefix.length > 0) {
    searchCategories(prefix).then(res =>
      dispatch({type: 'SET_CATEGORIES', categories: res})
    )
  }
}
