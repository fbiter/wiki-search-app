export function setSubcategories(subcategories) {
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
