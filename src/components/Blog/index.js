import React from 'react';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';
import posts from 'src/data/posts';

import BlogStyled from './BlogStyled';

const Blog = () => (
  <BlogStyled>
    <Menu categories={categories} />
    <Articles articles={posts} />
    <Footer />
  </BlogStyled>
);

export default Blog;
