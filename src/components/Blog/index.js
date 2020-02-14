import React, { useState } from 'react';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';
import posts from 'src/data/posts';

import BlogStyled from './BlogStyled';

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState('Accueil');

  let selectedPosts = posts;
  if (currentCategory !== 'Accueil') {
    selectedPosts = posts.filter((post) => post.category === currentCategory);
  }

  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Articles category={currentCategory} articles={selectedPosts} />
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
