import React from 'react';
import './Blog.css';

// import { Container, Grid } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const blogs = [
    {
        img:"" ,
        title: 'This is dummy blog section',
        subtitle: 'Real blog links will coming soon..'
    },
    {
        img: "",
        title: 'This is dummy blog section',
        subtitle: 'Real blog links will coming soon..'
    },
    {
        img: "" ,
        title: 'This is dummy blog section',
        subtitle: 'Real blog links will coming soon..'
    },
]

const Blog = () => {
    return (

        <h1 style={{marginTop: '200px'}} className= "text-center mt-5">Blog is coming soon</h1>
    //     <section className="blog-section" id="blogs">
    //         <Container maxWidth="lg">
    //             <h2 className="text-center">My Recent Blogs</h2>
    //             <Grid container>
    //                 {
    //                     blogs.map((blog, index) => (
    //                         <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
    //                             <div className="blog-container">
    //                                 <img src={blog.img} alt={blog.title} />
    //                                 <h3>{blog.title}</h3>
    //                                 <p>{blog.subtitle}</p>
    //                                 <button>View More <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
    //                             </div>
    //                         </Grid>
    //                     ))
    //                 }
    //             </Grid>
    //         </Container>
    //     </section>

    );
    
};

export default Blog;