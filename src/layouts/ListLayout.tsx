import React from 'react'
import HeadingCard from '../components/HeadingRow'
import '../style/ListLayout'

export default function ListLayout(props) {
  const {children, labels} = props
  return (
    <>
      {children.length > 0 && (
        <ol className="list">
          <HeadingCard labels={labels} />
          {children}
        </ol>
      )}
    </>
  )
}
