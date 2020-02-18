import React from 'react'

type Props = {
  labels: string[]
}

export default function HeadingRow({labels}: Props) {
  return (
    <li className="list__item list__item--heading">
      <span className="list__item-field list__item-field--primary">
        {labels[0]}
      </span>
      {labels.slice(1).map(l => (
        <span key={l} className="list__item-field list__item-field--secondary">
          {l}
        </span>
      ))}
    </li>
  )
}
