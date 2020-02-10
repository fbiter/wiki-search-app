import {useEffect} from 'react'
import {
  fetchCategories,
  fetchSubcategories,
  fetchArticlesByCategory
} from '../services'
import {setCategories, setSubcategories, setArticles} from '../store/actions'
import {selectCurConfig} from '../store/selectors'

export default (state, dispatch) => {
  useEffect(() => {
    const curConfig = selectCurConfig(state)
    if (curConfig.searchType === 'categories') {
      if (curConfig.searchTerm.length > 0) {
        fetchCategories(curConfig).then(res => {
          dispatch(setCategories(res))
        })
      } else {
        dispatch(setCategories([]))
      }
    } else if (
      curConfig.searchType === 'subcategories' &&
      curConfig.searchTerm.length === 0
    ) {
      fetchSubcategories(curConfig).then(res => {
        dispatch(setSubcategories(res))
      })
    } else if (curConfig.searchTerm.length === 0) {
      fetchArticlesByCategory(curConfig).then(res => dispatch(setArticles(res)))
    }
  }, [
    state.config.searchTerm,
    state.config.searchType,
    state.config.selectionHistory,
    state.config.listSize
  ])
}
