import React, {useContext} from 'react'
import ArticleRow from './ArticleRow'
import {ListLayout} from '../layouts'
import {
  selectSlicedCurData,
  selectCurConfig,
  selectFilteredSlicedCurData
} from '../store/selectors'
import {StoreContext} from '../context'

export default function ArticleList() {
  const {state} = useContext(StoreContext)
  const {selectionHistory} = selectCurConfig(state)
  const data =
    selectionHistory.length > 0
      ? selectFilteredSlicedCurData(state)
      : selectSlicedCurData(state)

  return (
    <ListLayout labels={['Title']}>
      {data.map(c => (
        <ArticleRow key={c.title} item={c} />
      ))}
    </ListLayout>
  )
}
