import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import Entry from "../components/entry"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Entry key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className='m-header'>2019</h2>
      <ul>
        {Posts}
      </ul>
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