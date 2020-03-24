import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import SEO from '../components/seo'
import Layout from './layout'
import Image from '../components/customImage'
import { Disqus } from 'gatsby-plugin-disqus'

const shortcodes = {
  Image
}

export default function Template({
    data,
}) {

    const { mdx } = data // data.markdownRemark holds your post data
    const { frontmatter, body } = mdx
    let disqusConfig = {
      url: `https://szacho.github.io/${frontmatter.path}`,
      identifier: frontmatter.path,
      title: frontmatter.title,
    }
    return (
      <Layout>
        <SEO title={ frontmatter.title } />
        <article className='blog-article'>
            <header className='blog-article--header l-flex'>
              <div className='l-flex blog-article--header-wrapper'>
                  <time className='blog-article--date' itemProp='datePublished'>
                    {frontmatter.date}
                  </time>
                  <ul className='l-flex blog-article--tags'>
                      { frontmatter.tags.map(tag => renderTag(tag)) }
                  </ul>
              </div>
              <h1 className='blog-article--title'>{ frontmatter.title }</h1>
            </header>
            <section className='l-flex blog-article--content'>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </section>
        <Disqus config={disqusConfig} />
        </article>
      </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
      body
    }
  }
`


const renderTag = (tag) => {
    let url = `/tags/#${tag}`
    return (
        <li className='category--tag category--tag-in-article' key={tag}>
            <Link to={url} className='category--tag-link'>{ tag }</Link>
        </li>
    )
}
