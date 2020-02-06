import React from 'react'
import '../style/card'

export default function(props) {
  const {item} = props
  return (
    <li className="list-item">
      <a className="item-title" href={item.link}>
        {item.title}
      </a>
    </li>
  )
}
