import React from 'react'

export default function ArticleRow(props) {
  const {item} = props
  return (
    <li className="list-item">
      <a className="item-title" href={item.link}>
        {item.title}
      </a>
    </li>
  )
}
