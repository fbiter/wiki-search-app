import React from 'react'

export default function CategoryRow(props) {
  const {item, handleSubcatClick, handleArticleClick} = props
  return (
    <li className="list-item">
      <a className="item-title" href={item.link}>
        {item.title}
      </a>
      <span className="item-secondary" onClick={() => handleSubcatClick(item)}>
        {item.subcats}
      </span>
      <a className="item-secondary" onClick={() => handleArticleClick(item)}>
        {item.pages}
      </a>
    </li>
  )
}
