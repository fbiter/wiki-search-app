import React from 'react'

export default function HeadingRow(props) {
  const {labels} = props
  return (
    <li className="list-item heading-item">
      <span className="item-title">{labels[0]}</span>
      {labels.slice(1).map(l => (
        <span key={l} className="item-secondary">
          {l}
        </span>
      ))}
    </li>
  )
}
