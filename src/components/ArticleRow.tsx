import React from 'react'

export default function ArticleRow(props) {
  const {item} = props
  return (
    <li className="list__item">
      <a className="list__item-primary" href={item.link}>
        {item.title}
      </a>
    </li>
  )
}
