import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import Entry from "../components/entry"
import SEO from "../components/seo"

function displayProjects(edges) {
  let projects = edges.filter(edge => edge.node.frontmatter.project)
  return projects.map(project => <Entry key={project.node.id} post={project.node} />)
}

const ProjectsPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h2 className='m-header'>Projects</h2>
      <ul>
        {displayProjects(edges)}
      </ul>

    </Layout>
  )
}

export default ProjectsPage
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
            project
            short
            image
          }
        }
      }
    }
  }
`
