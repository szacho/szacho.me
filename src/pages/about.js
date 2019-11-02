import React from "react"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h2 className='m-header'>About me</h2>
    <Img fluid={data.imageOne.childImageSharp.fluid} />
  </Layout>
)

export default About

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "newzealand2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`