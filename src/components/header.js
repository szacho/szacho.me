import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" className="m-wrapper l-flex">
    <Link to='/' className='site-title'>{siteTitle}</Link>
    <nav>
    <ul className="l-flex">
        <li className="nav--item">
          <Link className="nav--link" to="/about" rel="bookmark">about</Link>
        </li>
        {/* <li className="nav--item">
          <Link className="nav--link" to="/projects" rel="bookmark">projects</Link>
        </li> */}
        {/* <li className="nav--item">
          <Link className="nav--link" to="/feed.xml" rel="bookmark">feed</Link>
        </li> */}
        
    </ul>
  </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
