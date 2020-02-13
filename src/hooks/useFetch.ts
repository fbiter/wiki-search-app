import {useEffect} from 'react'
import {fetchSubcategories, fetchArticlesByCategory} from '../services'
import {setSubcategories, setArticles} from '../store/actions'
import {debouncedCategoryFetch} from './utils'
import {debouncedArticleFetch} from './utils/debounce'

export default (state, curConfig, dispatch) => {
  useEffect(() => {
    if (curConfig.searchType === 'categories') {
      debouncedCategoryFetch(curConfig, dispatch)
    } else if (
      curConfig.searchType === 'subcategories' &&
      curConfig.searchTerm.length === 0
    ) {
      fetchSubcategories(curConfig).then(res => {
        dispatch(setSubcategories(res))
      })
    } else {
      if (
        state.config.selectionHistory.length === 0 &&
        curConfig.searchTerm.length > 0
      ) {
        debouncedArticleFetch(curConfig, dispatch)
      } else if (
        curConfig.searchTerm.length === 0 &&
        state.config.selectionHistory.length > 0
      ) {
        fetchArticlesByCategory(curConfig).then(res =>
          dispatch(setArticles(res))
        )
      }
    }
  }, [
    curConfig.searchType,
    state.config.searchTerm,
    state.config.searchType,
    state.config.selectionHistory,
    state.config.listSize
  ])
}
