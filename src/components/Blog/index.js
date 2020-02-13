import React from 'react';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';

import BlogStyled from './BlogStyled';

/* 
  https://styled-components.com/docs
  avec styled components on peut utiliser des gabarits étiquetés fournis par la librairie
  c'est à dire qu'on va spécifier une chaine de caractère qui sera traitée par une fonction
  la chaine de caractère contiendra mon css
  la fonction retournera un élement react du type spécifié, ici une div, cette div sera enrichie d'une classe qui appliquera les styles que j'ai définis
*/

const Blog = () => (
  <BlogStyled>
    <Menu categories={categories} />
    <Articles />
    <Footer />
  </BlogStyled>
);

export default Blog;
