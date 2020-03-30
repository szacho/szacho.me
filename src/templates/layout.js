import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from '../components/sidebar'
import SlideMenu from '../components/slideMenu'
import Navbar from '../components/navbar'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <SlideMenu siteTitle={data.site.siteMetadata.title} id="mobile-sidebar" />
      <Navbar />
      <div className='m-wrapper l-flex'>
        <Sidebar siteTitle={data.site.siteMetadata.title} id="sidebar" />
        <main id='main'>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
