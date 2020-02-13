import React from 'react';

import styled from 'styled-components';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

const color = 'pink';

/* 
  avec styled components on peut utiliser des gabarits étiquetés fournis parl a librairie
  c'est à dire qu'on va spécifier de chaine de caractère qui sera traitée par une fonction
  la chaine de caractère contiendra mon css
  la fonction retournera un élement react du type spécifié, ici un div, cette div sera enrichie d'une classe qui appliquera les styles que j'ai défini
*/
const BlogStyled = styled.div`
  color: ${color};
  text-decoration: underline;
`;

const Blog = () => (
  <BlogStyled>
    <Menu />
    <Articles />
    <Footer />
  </BlogStyled>
);

export default Blog;
