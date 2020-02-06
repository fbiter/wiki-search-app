import React from 'react'
import ArticleRow from './ArticleRow'
import {ListLayout} from '../layouts'

export default function ArticleList(props) {
  const {data} = props
  return (
    <ListLayout labels={['Title']}>
      {data.map(c => (
        <ArticleRow key={c.title} item={c} />
      ))}
    </ListLayout>
  )
}
