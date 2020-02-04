import React from 'react'
import '../style/card'

export default function(props) {
  const {id, label, handleClick} = props
  return (
    <div className="card">
      <h2>{label}</h2>
      <span className="subcat-query-btn" onClick={handleClick}>
        Subcategories
      </span>
      <a className="articles" onClick={() => handleClick(id, 'articles')}>
        Articles
      </a>
    </div>
  )
}
