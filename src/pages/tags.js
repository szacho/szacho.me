import React from "react"
import PropTypes from "prop-types"
// Utilities
// Components
import Layout from '../templates/layout'
import Category from '../components/category'
import SEO from '../components/seo'
import { graphql } from "gatsby"
const TagsPage = ({
  data: {
    allMdx: { group, edges },
  },
}) => {
  const posts = edges.map(({ node }) => { return { ...node.frontmatter, id: node.id }} ) 
  const categories = group.map(({ fieldValue }) => fieldValue )

  return (<Layout>
    <SEO title='Categories' />
    { categories.map(category => <Category category={category} posts={posts} key={category} />)}

  </Layout>
)}

export default TagsPage
export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      },
      edges {
        node {
          id
          frontmatter {
            tags
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`