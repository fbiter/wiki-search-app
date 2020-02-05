import React, {useContext} from 'react'
import '../style/card'
import {StoreContext} from '../context'
import {setSearchType, newSearchTerm, addToSelection} from '../store/actions'

export default function(props) {
  const {state, dispatch} = useContext(StoreContext)
  const {item, id, title, link, handleClick} = props
  // const link = 'https://en.wikipedia.org/wiki/' + title.replace(/ /g, '_')
  return (
    <li className="list-item">
      <a className="item-title" href={link}>
        {title}
      </a>
      <span className="item-secondary" onClick={handleClick}>
        Subcategories
      </span>
      <a
        className="item-secondary"
        onClick={() => {
          dispatch(addToSelection(item))
          dispatch(setSearchType('articles'))
          dispatch(newSearchTerm(''))
        }}
      >
        Articles
      </a>
    </li>
  )
}
