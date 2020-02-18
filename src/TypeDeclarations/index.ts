export interface Item {
  title: string
  link: string
  sizes?: {
    subcats: number
    articles: number
  }
}
export interface StateInterface {
  categories: {
    data: Item[]
  }
  subcategories: {
    data: Item[]
  }
  articles: {
    data: Item[]
  }
  config: {
    searchTerm: string
    listSize: number
    startSelection: {title: string; searchType: string}
    selectionHistory: Selection[]
  }
}
export interface CurConfig {
  title: string
  searchType: string
  searchTerm: string
  listSize: number
  selectionHistory: Selection[]
}
interface Selection {
  title: string
  searchType: 'categories' | 'subcategories' | 'articles'
}
