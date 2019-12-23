import React from "react"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <article className='blog-article'>
      <h2 className='m-header'>About</h2>
      <section className='blog-article--content'>
        <p>
          This is my personal space in the internet and it contains mostly science and math related stuff.
        </p>
        <p>
          Some other nonsense may appear due to my interests and hobbies. 
          I love art and science and try to mix them together believing that one is a form of another. I am a climber, gymnastics amateur, backpacker and student of applied mathematics, so do not be surprised if you encounter a post with differential equations after reading stories of hitchhiking through Balkans. 
        </p>
        <p>
          *
        </p>
      </section>
      <h2 className='m-header'>Contact</h2>
      <section className='blog-article--content'>
        <ul style={{listStyleType: 'none'}}>
          <li>
            <a href="https://github.com/szacho"><Img fixed={data.githubIcon.childImageSharp.fixed} style={{ position: 'relative', top: '5px', left: '-3px' }}/> github</a>
          </li>
          <li>
            <Img fixed={data.mailIcon.childImageSharp.fixed} style={{ position: 'relative', top: '5px', left: '-3px' }}/> michal@szachniewicz.xyz
          </li>
        </ul>
      </section>
      
    </article>

  </Layout>
)

export default About

export const query = graphql`
  query {
    githubIcon: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    mailIcon: file(relativePath: { eq: "mail.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`