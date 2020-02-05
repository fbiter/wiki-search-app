import React, {useContext} from 'react'
import {StoreContext} from '../context'
import Card from './CategoryCard'
import {selectFilteredArticles} from '../store/selectors'
import ArticleCard from './ArticleCard'
import HeadingCard from './HeadingCard'

export default function() {
  const {state, dispatch} = useContext(StoreContext)
  return (
    <ol className="list">
      <HeadingCard labels={['Title']} />
      {selectFilteredArticles(state).map(c => (
        <ArticleCard
          key={c.title}
          id={c}
          item={c}
          link={c.link}
          title={c.title}
          handleClick={() => {}}
        />
      ))}
    </ol>
  )
}
