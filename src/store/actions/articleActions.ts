import {Item} from '../../TypeDeclarations'

export function setArticles(articles: Item[]) {
  return {
    type: 'SET_ARTICLES',
    articles: articles
  }
}
