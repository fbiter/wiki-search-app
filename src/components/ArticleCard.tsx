import React, {useContext} from 'react'
import '../style/card'
import {StoreContext} from '../context'
import {setSearchType, newSearchTerm, addToSelection} from '../store/actions'

export default function(props) {
  const {state, dispatch} = useContext(StoreContext)
  const {item, id, title, link, handleClick} = props
  // const link = 'https://en.wikipedia.org/wiki/' + title.replace(/ /g, '_')
  return (
    <div className="card">
      <h2>
        <a href={link}>{title}</a>
      </h2>
    </div>
  )
}
