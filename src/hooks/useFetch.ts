import {useEffect} from 'react'
import {fetchSubcategories, fetchArticlesByCategory} from '../services'
import {setSubcategories, setArticles} from '../store/actions'
import {selectCurConfig} from '../store/selectors'
import {debouncedCategoryFetch} from './utils'

export default (state, dispatch) => {
  useEffect(() => {
    const curConfig = selectCurConfig(state)
    if (curConfig.searchType === 'categories') {
      debouncedCategoryFetch(curConfig, dispatch)
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
