import React from 'react';
import './Footer.css';
import {
    FaFacebookF,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className=".justify-content-center">
                <ul style={{ marginLeft: "80px" }} className="header__ul mt-2">
                    <li>
                        <a href="https://www.facebook.com/mahedihasan.khairul"> <FaFacebookF className="headerIcon" /> </a>
                    </li>
                    <li>
                        <a href="https://github.com/mehedihasankhairul"> <FaGithub className="headerIcon" /> </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mhkhairul/"> <FaLinkedin className="headerIcon" /> </a>
                    </li>
                </ul>

                <p> all right reserved | MeHeDi HaSaN Khairul</p>
            </div>
        </footer>
    );
};

export default Footer;