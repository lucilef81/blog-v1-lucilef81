import React, { useState } from 'react';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';
// import posts from 'src/data/posts';

import BlogStyled from './BlogStyled';

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState('Accueil');
  const [posts, setPosts] = useState([]);

  let selectedPosts = posts;
  if (currentCategory !== 'Accueil') {
    selectedPosts = posts.filter((post) => post.category === currentCategory);
  }

  // on peut préparer un composant intermédiaire
  let Welcome;
  if (posts.length === 0) {
    Welcome = () => <button type="button">Cliquez pour charger</button>;
  }
  else {
    Welcome = () => <Articles category={currentCategory} articles={selectedPosts} />;
  }

  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Welcome />
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
