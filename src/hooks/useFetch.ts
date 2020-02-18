import {useEffect} from 'react'
import {fetchSubcategories, fetchArticlesByCategory} from '../services'
import {setSubcategories, setArticles} from '../store/actions'
import {debouncedCategoryFetch} from './utils'
import {debouncedArticleFetch} from './utils/debounce'
import {CurConfig} from '../TypeDeclarations'

export default (curConfig: CurConfig, dispatch) => {
  useEffect(() => {
    if (curConfig.searchType === 'categories') {
      debouncedCategoryFetch(curConfig, dispatch)
    } else if (
      curConfig.searchType === 'subcategories' &&
      curConfig.searchTerm.length === 0
    ) {
      fetchSubcategories(curConfig.title).then(res => {
        dispatch(setSubcategories(res))
      })
    } else {
      if (
        curConfig.selectionHistory.length === 0 &&
        curConfig.searchTerm.length > 0
      ) {
        debouncedArticleFetch(curConfig, dispatch)
      } else if (
        curConfig.searchTerm.length === 0 &&
        curConfig.selectionHistory.length > 0
      ) {
        fetchArticlesByCategory(curConfig).then(res =>
          dispatch(setArticles(res))
        )
      }
    }
  }, [
    curConfig.searchType,
    curConfig.searchTerm,
    curConfig.searchType,
    curConfig.selectionHistory,
    curConfig.listSize
  ])
}
