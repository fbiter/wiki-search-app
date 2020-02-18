import React from 'react'
import {Item} from '../TypeDeclarations'

export default function ArticleRow({item}: Props) {
  return (
    <li className="list__item">
      <a
        className="list__item-field list__item-field--primary"
        href={item.link}
      >
        {item.title}
      </a>
    </li>
  )
}

type Props = {
  item: Item
}
