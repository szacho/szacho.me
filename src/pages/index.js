import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import Entry from "../components/entry"
import SEO from "../components/seo"

function displayPosts(edges) {
  let posts = edges.filter(edge => !edge.node.frontmatter.project)
  return posts.map(post => <Entry key={post.node.id} post={post.node} />)
}


const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h2 className='m-header'>Blog</h2>
      <ul>
        {displayPosts(edges)}
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            project
            short
            image
          }
        }
      }
    }
  }
`