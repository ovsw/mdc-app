import React from 'react'
import ListingItem from './ListingItem'

const RecentNews = ({ articles: { edges } }) => (
  <>
    {edges.map(({ node }) => (
      <>
        <ListingItem newsArticle={node} key={node.slug} />
      </>
    ))}
  </>
)

export default RecentNews
