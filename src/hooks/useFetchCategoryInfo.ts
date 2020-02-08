import {useEffect} from 'react'
import {fetchCategoriesInfo} from '../services'
import {updateDataDetails, updateSubcategoryDetails} from '../store/actions'
import {selectCurConfig} from '../store/selectors'

// once categories are about to be listed, fetch their size info
// (used in CategoryList)
export default (state, dispatch, data) => {
  useEffect(() => {
    if (
      data.length > 0 &&
      !data.every(d => Object.hasOwnProperty.call(d, 'subcats'))
    ) {
      const {searchType} = selectCurConfig(state)
      if (searchType === 'categories') {
        fetchCategoriesInfo(data.map(d => d.title)).then(res =>
          dispatch(updateDataDetails(res))
        )
      } else if (searchType === 'subcategories') {
        fetchCategoriesInfo(data.map(d => d.title)).then(res =>
          dispatch(updateSubcategoryDetails(res))
        )
      }
    }
  }, [data])
}
