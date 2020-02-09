import React, {useContext} from 'react'
import {StoreContext} from '../context'
import '../style/Breadcrumbs'
import {changeSelection} from '../store/actions'

export default function Breadcrumbs() {
  const {state, dispatch} = useContext(StoreContext)
  const handleClick = title => {
    dispatch(changeSelection(title))
  }
  return (
    <div className="breadcrumbs">
      {state.config.selectionHistory.map(s => (
        <span
          key={s.title}
          className="breadcrumbs__crumb"
          onClick={() => handleClick(s.title)}
        >
          {s.title}
        </span>
      ))}
    </div>
  )
}
