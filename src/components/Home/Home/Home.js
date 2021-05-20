import React from 'react';
import Blog from '../Blog/Blog';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MySkills from '../MySkills/MySkills';
import Project from '../Project/Project';
import './Home.css'

const Home = () => {
    return (
        <main>
            <Header></Header>
            <MySkills></MySkills>
            <Project></Project>
            <Blog></Blog>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </main>
    );
};

export default Home;