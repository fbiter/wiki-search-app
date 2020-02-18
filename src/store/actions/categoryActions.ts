import {Item} from '../../TypeDeclarations'

export function setCategories(categories: Item[]) {
  return {
    type: 'SET_CATEGORIES',
    categories: categories
  }
}

export function updateCategoryInfo(dataDetails) {
  return {
    type: 'UPDATE_DATA_DETAILS',
    dataDetails: dataDetails
  }
}
