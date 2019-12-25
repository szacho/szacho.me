import React from "react"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from 'styled-components'

const SmallParagraph = styled.p`
  font-size: 1.6rem;
`

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <article className='blog-article'>
      <h2 className='m-header'>About</h2>
      <section className='blog-article--content'>
        <p>
          My name is Michael Szachniewicz, a student of applied mathematics from Wrocław (Poland). This is my personal space in the internet and I will post here mostly math and science stuff, thereby documenting my road to get a job in data science. Besides that I am a climber, amateur gymnasts, and traveler, thus some posts about my interests may appear here as well. 
        </p>
        <p>
          If you want to contact me for any reason related to similar field of study, I am open to have a chat - get in touch vie email below!
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
        <SmallParagraph>
          *listen to my favourite band <a href="https://youtu.be/kMaF0YKq3gU">Bad Religion - Before You Die</a>
        </SmallParagraph>
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