import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = ({ click }) => {
    const [changeNavColor, setChangeNavColor] = useState(false)
    window.addEventListener('scroll', () => {
        if(window.scrollY > 110) {
            setChangeNavColor(true)
        } else {
            setChangeNavColor(false)
        }
    })

    return (
        <nav className={changeNavColor ? 'navbar-active' : 'navbar'}>
            <div className="navbar-link">
                <a href ="#about"><h2>MHK</h2></a>
            </div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-btn">
            <a href="https://drive.google.com/file/d/1RJU8Cs_CA2NzemfvoCvxiYtrukXZ4fzx/view?usp=sharing" target='_blank' rel="noreferrer" className="resume-button">Get Resume <FontAwesomeIcon icon={faDownload} /></a>
            </div>
            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;