import {useEffect} from 'react'
import {
  fetchCategories,
  fetchCategoriesInfo,
  fetchSubcategories,
  fetchArticlesByCategory
} from '../services'
import {
  setCategories,
  updateDataDetails,
  setSubcategories,
  updateSubcategoryDetails,
  setArticles
} from '../store/actions'

export default (state, dispatch) => {
  useEffect(() => {
    if (state.config.searchType === 'categories') {
      if (state.config.searchTerm.slice(-1)[0].length > 0) {
        fetchCategories(state.config).then(res => {
          dispatch(setCategories(res))
        })
      } else {
        dispatch(setCategories([]))
      }
    } else if (
      state.config.searchType === 'subcategories' &&
      state.config.searchTerm.slice(-1)[0].length === 0
    ) {
      fetchSubcategories(state.config).then(res => {
        dispatch(setSubcategories(res))
      })
    } else if (state.config.searchTerm.slice(-1)[0].length === 0) {
      fetchArticlesByCategory(state.config).then(res =>
        dispatch(setArticles(res))
      )
    }
  }, [
    state.config.searchTerm,
    state.config.searchType,
    state.config.selection,
    state.config.listSize
  ])
}
