import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faKaggle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Image from './customImage'

const imageStyles = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    boxShadow: "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)"
}

const Sidebar = ({id}) => (
  <aside className="sidebar" id={id}>
    <div className="m-sticky-wrapper">

    <Image imagePath="portrait.JPG" alt="Blog's author portrait." styles={imageStyles}/>

    {/* <img src="https://via.placeholder.com/100" alt="Blog's author portrait" /> */}
    <h1 className="sidebar--name">Michal Szachniewicz</h1>
    <p className="sidebar--description">
        Aspiring data scientist, keen on AI. 
        Applied mathematics UG @ Wroclaw University of Science and Technology. 
        I write about machine learning, my projects and travelling. 
    </p>
    <nav className='sidebar--nav'>
        <ul className="sidebar--nav-ul">
            <li className="sidebar--nav-item">
                <Link className="sidebar--nav-link" activeClassName='sidebar--nav-link-active' to="/about/" rel="bookmark">about</Link>
            </li>
            <li className="sidebar--nav-item">
                <Link className="sidebar--nav-link" activeClassName='sidebar--nav-link-active' to="/" rel="bookmark">blog</Link>
            </li>
            <li className="sidebar--nav-item">
                <Link className="sidebar--nav-link" activeClassName='sidebar--nav-link-active' to="/projects/" rel="bookmark">projects</Link>
            </li>
            {/* <li className="nav--item">
            <Link className="nav--link" to="/feed.xml" rel="bookmark">feed</Link>
            </li> */}
            
        </ul>
    </nav>
    <ul className="sidebar--social-media">
        <li>
            <a href='https://github.com/szacho/'><FontAwesomeIcon icon={faGithub} /></a>    
        </li>
        <li>
            <a href='https://www.kaggle.com/szacho/'><FontAwesomeIcon icon={faKaggle} /></a>    
        </li>
        <li>
            <a href='https://www.linkedin.com/in/micha%C5%82-szachniewicz-23b6351a5/'><FontAwesomeIcon icon={faLinkedinIn} /></a>    
        </li>
        <li>
            <a href='mailto:mszachniewicz@outlook.com'><FontAwesomeIcon icon={faAt} /></a>    
        </li>
    </ul>
    <p className="sidebar--note">&copy; M. Szachniewicz 2020</p>
    </div>
  </aside>
)

export default Sidebar
