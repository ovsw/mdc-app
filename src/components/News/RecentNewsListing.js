import React from 'react'
import ListingItem from './ListingItem'

const NewsListing = ({ articles: { edges } }) => (
  <div className="md:mt-16">
    {edges.map(({ node }) => (
      <ListingItem newsArticle={node} key={node.slug}/>
    ))}
  </div>
)

export default NewsListing
