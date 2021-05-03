import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import './Header.css'
import Banner from '../../../images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import TextAnimation from '../Animation/TextAnimation/TextAnimation';



const Header = () => {
    return (
        <Container maxWidth="lg" className="banner" id="about">
            <Grid container className="grid-container">
                <Box clone order={{ xs: 2, sm: 2, md: 1 }}>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <div className="banner-grid-left">
                            <h3 className="banner-title">I'm </h3>
                            <h1 className="banner-name">MeHeDi HaSaN Khairul</h1>
                               <TextAnimation></TextAnimation>
                            <p className="banner-text">Hello there, Welcome to my Profile. a Junior MERN Stack Web Developer.</p>
                            <a href="https://drive.google.com/uc?export=download&id=1eUvphegNNU-4YWLSw6HIe-vj9isQICKn" target='_blank' rel="noreferrer" className="resume-button">Get Resume  <FontAwesomeIcon icon={faDownload} /></a>
                        </div>
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 1, md: 2 }}>
                    <Grid item lg={5} md={5} sm={12} xs={12} className="banner-grid-right">
                        <img src={Banner} alt="Logo" />
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
};

export default Header;