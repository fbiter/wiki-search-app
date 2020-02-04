export const selectFilteredSubcategories = state =>
  state.subcategories.data.filter(
    w =>
      w
        .toLowerCase()
        .indexOf(state.config.searchTerm.slice(-1)[0].toLowerCase()) !== -1
  )

export const selectCurSeacrhTerm = state => state.config.searchTerm.slice(-1)
