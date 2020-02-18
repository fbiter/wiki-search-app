import {Item} from '../../TypeDeclarations'

export function setSubcategories(subcategories: Item[]) {
  return {
    type: 'SET_SUBCATEGORIES',
    subcategories: subcategories
  }
}

export function updateSubcategoryInfo(dataDetails) {
  return {
    type: 'UPDATE_SUBCATEGORY_DETAILS',
    dataDetails: dataDetails
  }
}
