import React from 'react'

export default function HeadingRow(props) {
  const {labels} = props
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
