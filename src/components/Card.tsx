import React from 'react'
import '../style/card'

export default function(props) {
  const {id, label, handleClick} = props
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <h2>{label}</h2>
    </div>
  )
}
