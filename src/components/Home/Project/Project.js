import { Accordion, AccordionDetails, AccordionSummary, Container, Grid } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ColorMe from '../../../images/ColorMe.JPG';
import halalshop from '../../../images/halal-valley.JPG';
import teslaRider from '../../../images/tesla.JPG'


const portfolio = [
    {
        img: ColorMe,
        title: 'ColorMe | Wall Painting Service Provider',
        subtitle: 'Color Your Wall Like your dream just book a service',
        feature1: 'Booking a service from service section, and check your service status',
        feature2: 'Admin can change status and delete order also make an admin',
        feature3: 'a user check his order and make a review from review section',
        technology: 'React Js, Node Js, MongoDB, Express Js,  Firebase Authentication',
        liveSite: '',
        Github: '',
       
    },
    {
        img: halalshop,
        title: 'Halal Valley Shop | a E-commerce Web application',
        subtitle: 'This is a grocery shop. You can shop your daily needs',
        feature1: 'A user can add product to add cart and make them order. ',
        feature2: 'Admin can change status and delete order also admin make an admin',
        feature3: 'a user check his order and delete his order',
        technology: 'React Js, Node Js, MongoDB, Express Js,  Firebase Authentication',
        liveSite: '',
        Github: '',
       
    },
    {
        img: halalshop,
        title: 'Halal Valley Shop | a E-commerce Web application',
        subtitle: 'This is a grocery shop. You can shop your daily needs',
        feature1: 'A user can add product to add cart and make them order. ',
        feature2: 'Admin can change status and delete order also admin make an admin',
        feature3: 'a user check his order and delete his order',
        technology: 'React Js, Node Js, MongoDB, Express Js,  Firebase Authentication',
        liveSite: '',
        Github: '',
    },
]

const Project = () => {
    return (
        <section className="project-section" id="portfolio">
            <Container maxWidth="lg">
                <h2 className="text-center">Projects</h2>
                <Grid container>
                    {
                        portfolio.map((item, index) => (
                            <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
                                <div className="project-container">
                                    <img src={item.img} alt={item.title}/>
                                    <h2>{item.title}</h2>
                                    <h3>{item.subtitle}</h3>
                                    <Accordion style={{backgroundColor: '#2A2C39', color: '#fff'}}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            View Details
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <h3>Overview: </h3>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>1. {item.feature1}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>2. {item.feature2}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>3. {item.feature3}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <h3>Technology Used</h3>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <p>{item.technology}</p>
                                        </AccordionDetails>
                                        <AccordionDetails>
                                            <a href={item.repo} target="_blank" rel="noreferrer"><FontAwesomeIcon className="project-icon" icon={faGithub} /></a>
                                            <a href={item.liveSite} target="_blank" rel="noreferrer"><FontAwesomeIcon className="project-icon" icon={faExternalLinkAlt} /></a>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default Project;