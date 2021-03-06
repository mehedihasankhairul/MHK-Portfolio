import { Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [isSent, setIsSent] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const sendEmail = e => {
        setIsClicked(true)
        e.preventDefault();
        emailjs.sendForm('service_ows2rdx', 'template_mk81gcn', e.target, 'user_hgNZZma4zR1SJEwdyrME1')
            .then((result) => {
                setIsSent(true)
            }, (error) => {
                setIsSent(false)
            });
        e.target.reset();
    }
    return (
        <Container>
            <section className="contact-section" id="contact">
                <h1 className="text-center">Contact Me</h1>
                <Grid container>
                    <Grid item lg={3} md={3} sm={5} xs={12}>
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h3>Phone:</h3>
                                    <p>+88 01759-788156</p>

                            </div>
                            <div className="contact-info">
                                <h3>Email:</h3>
                                <p>mhkhairul78@gmail.com</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={9} md={9} sm={7} xs={12}>
                        <form onSubmit={sendEmail}>
                            <Grid container>
                                <Grid item lg={6} sm={12} xs={12}>
                                    <input className="form-control mt-3" type="text" placeholder="Entre Name" name="name" />
                                </Grid>
                                <Grid item lg={6} sm={12} xs={12}>
                                    <input className="form-control mt-3" type="text" placeholder="Entre Email" name="email" />
                                </Grid>
                            </Grid>
                            <textarea className="form-control text-area mt-3" placeholder="Message" rows="6" name="message"></textarea>
                            <button className="send-message-btn mt-3" type="submit">Send Message</button>
                            {isClicked && isSent && <p style={{ color: 'green', textAlign: 'center', fontSize: '18px' }}>Message sent successfully</p>
                            }
                        </form>
                    </Grid>
                </Grid>
            </section>
        </Container>

    );
};

export default ContactMe;