import React, {useContext} from 'react'
import ArticleRow from './ArticleRow'
import {ListLayout} from '../layouts'
import {selectSlicedCurData} from '../store/selectors'
import {StoreContext} from '../context'

export default function ArticleList() {
  const {state} = useContext(StoreContext)
  const data = selectSlicedCurData(state)

  return (
    <ListLayout labels={['Title']}>
      {data.map(c => (
        <ArticleRow key={c.title} item={c} />
      ))}
    </ListLayout>
  )
}
