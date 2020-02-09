import React from 'react'

export default function CategoryRow(props) {
  const {item, handleSubcatClick, handleArticleClick} = props
  return (
    <li className="list__item">
      <a
        className="list__item-field list__item-field--primary"
        href={item.link}
      >
        {item.title}
      </a>
      <span
        className="list__item-field list__item-field--secondary"
        onClick={() => {
          if (item.subcats > 0) handleSubcatClick(item)
        }}
      >
        {item.subcats}
      </span>
      <a
        className="list__item-field list__item-field--secondary"
        onClick={() => {
          if (item.pages > 0) handleArticleClick(item)
        }}
      >
        {item.pages}
      </a>
    </li>
  )
}
