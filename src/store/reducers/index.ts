import categoriesReducer from './categoriesReducer'
import subcategoriesReducer from './subcategoriesReducer'
import articlesReducer from './articlesReducer'
import configReducer from './configReducer'

export default (state, action) => {
  console.log(state)
  return {
    ...state,
    categories: categoriesReducer(state.categories, action),
    subcategories: subcategoriesReducer(state.subcategories, action),
    articles: articlesReducer(state.articles, action),
    config: configReducer(state.config, action)
  }
}
