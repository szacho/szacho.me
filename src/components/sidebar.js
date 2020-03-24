import { Link } from "gatsby"
import React from "react"

const Sidebar = () => (
  <aside id="sidebar" className="sidebar">
    <div className="m-sticky-wrapper">

    <img src="https://via.placeholder.com/100" alt="Blog's author portrait" />
    <h1 className="sidebar--name">Michal Szachniewicz</h1>
    <p className="sidebar--description">
        Aspiring data scientist, keen on AI. 
        Applied mathematics UG @ Wrocław University of Technology. 
        I write about machine learning, my projects and travelling. 
    </p>
    <nav className='sidebar--nav'>
        <ul className="sidebar--nav-ul">
            <li className="sidebar--nav-item">
                <Link className="sidebar--nav-link" activeClassName='sidebar--nav-link-active' to="/about" rel="bookmark">about</Link>
            </li>
            <li className="sidebar--nav-item">
                <Link className="sidebar--nav-link" activeClassName='sidebar--nav-link-active' to="/" rel="bookmark">blog</Link>
            </li>
            <li className="sidebar--nav-item">
                <Link className="sidebar--nav-link" activeClassName='sidebar--nav-link-active' to="/projects" rel="bookmark">projects</Link>
            </li>
            {/* <li className="nav--item">
            <Link className="nav--link" to="/feed.xml" rel="bookmark">feed</Link>
            </li> */}
            
        </ul>
    </nav>

    </div>
  </aside>
)

export default Sidebar
