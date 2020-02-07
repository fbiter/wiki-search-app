import {useEffect} from 'react'
import {fetchCategoriesInfo} from '../services'
import {updateDataDetails, updateSubcategoryDetails} from '../store/actions'

// once categories are about to be listed, fetch their size info
// (used in CategoryList)
export default (state, dispatch, data) => {
  useEffect(() => {
    if (
      data.length &&
      !data.every(d => Object.hasOwnProperty.call(d, 'subcats'))
    ) {
      if (state.config.searchType === 'categories') {
        fetchCategoriesInfo(data.map(d => d.title)).then(res =>
          dispatch(updateDataDetails(res))
        )
      } else {
        fetchCategoriesInfo(data.map(d => d.title)).then(res =>
          dispatch(updateSubcategoryDetails(res))
        )
      }
    }
  }, [data])
}
