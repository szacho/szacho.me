import React from 'react'
import Image from './customImage'

const imageStyles = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    marginRight: "20px"
}

const Navbar = () => (
    <header className='navbar'>
        <Image imagePath="portrait.JPG" alt="Blog's author portrait." styles={imageStyles} />
        {/* <img className='navbar--image' src="https://via.placeholder.com/40" alt="Blog's author portrait" /> */}
        <h1 className="navbar--name">Michal Szachniewicz</h1>
    </header>
)

export default Navbar