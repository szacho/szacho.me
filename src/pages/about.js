import React from "react"

import Layout from "../templates/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from '@fortawesome/free-solid-svg-icons';

const About = () => (
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
            <FontAwesomeIcon icon={faGithub} /><a href="https://github.com/szacho"> github</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faAt} /> mszachniewicz@outlook.com
          </li>
        </ul>
      </section>
      
    </article>

  </Layout>
)

export default About
