import {fetchCategories} from '../../services'
import {setCategories, setArticles} from '../../store/actions'
import fetchArticles from '../../services/fetchArticles'

function debounce(func, wait) {
  let timeout
  return function(...args) {
    const later = function() {
      func.apply(this, args)
    }
    window.clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// this function calls fetch after 600ms and cancels previous fetch calls on wait
// purpose: increase the efficiency of api calls (limits the request rate, and cancels useless (old) calls)
export const debouncedCategoryFetch = debounce((curConfig, dispatch) => {
  if (curConfig.searchTerm.length > 0) {
    fetchCategories(curConfig).then(res => {
      dispatch(setCategories(res))
    })
  } else {
    dispatch(setCategories([]))
  }
}, 600)

export const debouncedArticleFetch = debounce((curConfig, dispatch) => {
  if (curConfig.searchTerm.length > 0) {
    fetchArticles(curConfig).then(res => {
      dispatch(setArticles(res))
    })
  } else {
    dispatch(setArticles([]))
  }
}, 600)
