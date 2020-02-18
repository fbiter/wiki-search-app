import {
  StateInterface,
  Article,
  Category,
  CurConfig,
  Item
} from '../../TypeDeclarations'

export const selectFilteredSubcategories = (state: StateInterface) =>
  state.subcategories.data.filter(w => {
    return (
      w.title.toLowerCase().indexOf(state.config.searchTerm.toLowerCase()) !==
      -1
    )
  })

export const selectFilteredArticles = (state: StateInterface) =>
  state.articles.data.filter(
    w =>
      w.title.toLowerCase().indexOf(state.config.searchTerm.toLowerCase()) !==
      -1
  )

export const selectCurSeacrhTerm = (state: StateInterface) =>
  state.config.searchTerm

export const selectCurSelection = (state: StateInterface) => {
  if (state.config.selectionHistory.length)
    return state.config.selectionHistory.slice(-1)[0]
  else return state.config.startSelection
}

export const selectCurConfig = (state: StateInterface): CurConfig => {
  const curSelection = selectCurSelection(state)
  return {
    title: curSelection.title,
    searchType: curSelection.searchType,
    searchTerm: state.config.searchTerm,
    listSize: state.config.listSize,
    selectionHistory: state.config.selectionHistory
  }
}

export const selectAllCurData = (state: StateInterface) => {
  const searchType = selectCurSelection(state).searchType
  return state[searchType].data
}

export const selectSlicedCurData = (state: StateInterface) => {
  const listSize = selectCurConfig(state).listSize
  return selectAllCurData(state).slice(0, listSize)
}

export const selectFilteredData = (state: StateInterface): Item[] => {
  return selectAllCurData(state).filter(
    w =>
      w.title.toLowerCase().indexOf(state.config.searchTerm.toLowerCase()) !==
      -1
  )
}

export const selectFilteredSlicedCurData = (state: StateInterface) => {
  const filteredData = selectFilteredData(state)
  return filteredData.slice(0, state.config.listSize)
}
