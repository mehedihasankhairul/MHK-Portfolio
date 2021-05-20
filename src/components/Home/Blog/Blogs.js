import { Container } from '@material-ui/core';
import React from 'react';
import BlogData from './BlogData';
import './Blogs.css';


const Blogs = () => {
  return (
    <Container>
      <div className="Blogs">
      <h2 className="text-center">Awesome Article</h2>
        <div className="blog_container">

          {
            BlogData.map((blog, idx) =>
              <div key={idx} className="single_blog">
                <a href={blog.link} target="blank" className="blog_link">
                  <img src={blog.coverImg} alt={blog.title} className="blog_cover" />
                  <h1 className="blog_title">{blog.title}</h1>
                </a>
              </div>
            )
          }
        </div>
      </div>
    </Container>
  );
};

export default Blogs;