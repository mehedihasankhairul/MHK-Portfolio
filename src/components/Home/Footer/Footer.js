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
                <ul style={{ justifyContent: 'center',}} className="header__ul" >
                    <li style= {{margin: '5px'}}>
                        <a style={{color: "white"}} href="https://www.facebook.com/mahedihasan.khairul"> <FaFacebookF className="headerIcon" /> </a>
                    </li>
                    <li style= {{margin: '5px'}}>
                        <a style={{color: "white"}} href="https://github.com/mehedihasankhairul"> <FaGithub className="headerIcon" /> </a>
                    </li>
                    <li style= {{margin: '5px'}}>
                        <a style={{color: "white"}} href="https://www.linkedin.com/in/mhkhairul/"> <FaLinkedin className="headerIcon" /> </a>
                    </li>
                </ul>

                <p>Copyright | <span style= {{fontWeight: 500,}}>MeHeDi HaSaN Khairul</span> </p>
            </div>
        </footer>
    );
};

export default Footer;