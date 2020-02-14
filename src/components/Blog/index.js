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

  /*
    à propos des opérateurs logiques
    && = les deux
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false
    false && 'toto' -> false
    true && 'toto' -> 'toto'
    l'interpreteur regarde la valeur de gauche, si c'est false alors l'ensemble est forcemment faux, donc on prend la valeur false
    si la valeur de gauche est true alors on prend la valeur de droite telle quelle, donc si c'est true on prend true, si c'est false on prend false, si c'est "toto" on prend "toto", si c'est 123 on prend 123
    Dans du jsx afficher un booléen ne produit aucun effet donc si c'est false on affiche rien, si c'est true et qu'on a mis du jsx à droite du && on affiche ce jsx
    ---
    marche aussi avec || mais c'est l'inverse
    ou = au moins un des deux
    true || true -> true
    true || false -> true
    false ||  true -> true
    false || false -> false
    false || 'toto' -> 'toto'
    true || 'toto' -> true
    si c'est faux on prend la valeur de droite telle quelle
    si c'est true on prend true
  */

  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {posts.length === 0 && (
        <button type="button">Cliquez pour charger</button>
      )}
      {posts.length !== 0 && (
        <Articles category={currentCategory} articles={selectedPosts} />
      )}
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
