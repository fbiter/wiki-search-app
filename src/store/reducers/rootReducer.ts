import {
  categoriesReducer,
  subcategoriesReducer,
  articlesReducer,
  configReducer
} from './'

export default (state, action) => {
  return {
    ...state,
    categories: categoriesReducer(state.categories, action),
    subcategories: subcategoriesReducer(state.subcategories, action),
    articles: articlesReducer(state.articles, action),
    config: configReducer(state.config, action)
  }
}
