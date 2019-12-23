import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import Entry from "../components/entry"
import SEO from "../components/seo"

function sortByYear(posts) {
  let activeYear = null;
  let list_of_posts = [];
  posts.filter(edge => edge.node.frontmatter.date).forEach(edge => {
    let year = edge.node.frontmatter.date.slice(-4)
    if (year != activeYear) {
      activeYear = year;
      list_of_posts.push(<h2 key={activeYear} className='m-header'>{activeYear}</h2>)
      list_of_posts.push([<Entry key={edge.node.id} post={edge.node} />])
    } else {
      list_of_posts[list_of_posts.length-1].push(<Entry key={edge.node.id} post={edge.node} />)
    }
  })
  return list_of_posts.map(val => {
    if (val instanceof Array) {
      return <ul>{val}</ul>
    } else {
      return val
    }
  })
}


const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  sortByYear(edges)
  return (
    <Layout>
      <SEO title="Home" />
      {sortByYear(edges)}
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`