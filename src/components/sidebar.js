import { Link } from "gatsby"
import React from "react"

import gitIcon from '../images/github.png'

const Sidebar = () => (
  <aside id="sidebar" className="sidebar">
    <div className="m-sticky-wrapper">

    <img src="https://via.placeholder.com/100" alt="Blog's author portrait" />
    <h1 className="sidebar--name">Michal Szachniewicz</h1>
    <p className="sidebar--description">
        Aspiring data scientist, keen on AI. 
        Applied mathematics UG @ Wroclaw University of Science and Technology. 
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
    <ul className="sidebar--social-media">
        <li>
            <a href='https://github.com/szacho/'><i class="fab fa-github"></i></a>    
        </li>
        <li>
            <a href='https://www.kaggle.com/szacho/'><i className="fab fa-kaggle"></i></a>    
        </li>
        <li>
            <a href='https://www.linkedin.com/in/micha%C5%82-szachniewicz-23b6351a5/'><i className="fab fa-linkedin-in"></i></a>    
        </li>
        <li>
            <a href='mailto:mszachniewicz@outlook.com'><i className="fa fa-at"></i></a>    
        </li>
    </ul>
    <p className="sidebar--note">&copy; M. Szachniewicz 2020</p>
    </div>
  </aside>
)

export default Sidebar
