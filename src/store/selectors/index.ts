export const selectFilteredSubcategories = state =>
  state.subcategories.data.filter(w => {
    return (
      w.title
        .toLowerCase()
        .indexOf(state.config.searchTerm.slice(-1)[0].toLowerCase()) !== -1
    )
  })

export const selectFilteredArticles = state =>
  state.articles.data.filter(
    w =>
      w.title
        .toLowerCase()
        .indexOf(state.config.searchTerm.slice(-1)[0].toLowerCase()) !== -1
  )

export const selectCurSeacrhTerm = state => state.config.searchTerm.slice(-1)

export const selectCurSelection = state => {
  if (state.config.selectionHistory.length)
    return state.config.selectionHistory.slice(-1)[0]
  else return state.config.startSelection
}

export const selectCurConfig = state => {
  const curSelection = selectCurSelection(state)
  return {
    title: curSelection.title,
    searchType: curSelection.searchType,
    searchTerm: state.config.searchTerm.slice(-1)[0],
    listSize: state.config.listSize
  }
}
