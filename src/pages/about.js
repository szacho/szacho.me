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
          My name is Michal Szachniewicz, I am a student of applied mathematics from Wrocław (Poland). On this blog I will post mostly math and science stuff, thereby documenting my development in artificial intelligence and data science. Besides that I am a climber, amateur gymnast and traveler, thus some posts about my interests may appear here as well. 
        </p>
        <p>
          If you want to contact me for any reason related to similar field of study, I am open to have a chat - get in touch via email below!
        </p>
      </section>
      <h2 className='m-header'>Contact</h2>
      <section className='blog-article--content'>
        <ul style={{listStyleType: 'none'}}>
          <li>
            <a href="https://github.com/szacho"><Img fixed={data.githubIcon.childImageSharp.fixed} style={{ position: 'relative', top: '5px', left: '-3px' }}/> github</a>
          </li>
          <li>
            <Img fixed={data.mailIcon.childImageSharp.fixed} style={{ position: 'relative', top: '5px', left: '-3px' }}/> mszachniewicz@outlook.com
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