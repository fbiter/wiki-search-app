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
          if (item.sizes.subcats > 0) handleSubcatClick(item)
        }}
      >
        {item.sizes.subcats}
      </span>
      <a
        className="list__item-field list__item-field--secondary"
        onClick={() => {
          if (item.sizes.articles > 0) handleArticleClick(item)
        }}
      >
        {item.sizes.articles}
      </a>
    </li>
  )
}
