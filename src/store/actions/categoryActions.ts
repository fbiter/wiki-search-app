export function setCategories(categories: string[]) {
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
