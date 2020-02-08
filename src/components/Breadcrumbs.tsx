import React, {useContext} from 'react'
import {StoreContext} from '../context'
import '../style/Breadcrumbs'
import {changeSelection, setSearchType} from '../store/actions'

export default function Breadcrumbs() {
  const {state, dispatch} = useContext(StoreContext)
  const handleClick = title => {
    dispatch(changeSelection(title))
    dispatch(setSearchType('subcategories'))
  }
  return (
    <div className="breadcrumbs">
      {state.config.selectionHistory.map(s => (
        <span
          key={s.title}
          className="crumb"
          onClick={() => handleClick(s.title)}
        >
          {s.title}
        </span>
      ))}
    </div>
  )
}
