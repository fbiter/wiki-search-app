import React, {useContext} from 'react'
import '../style/card'
import {StoreContext} from '../context'
import {setSearchType, newSearchTerm, addToSelection} from '../store/actions'

export default function(props) {
  const {state, dispatch} = useContext(StoreContext)
  const {item, id, title, link, handleClick} = props
  return (
    <li className="list-item">
      <a className="item-title" href={link}>
        {title}
      </a>
    </li>
  )
}
