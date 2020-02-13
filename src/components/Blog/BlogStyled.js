import styled from 'styled-components';

// import theme from 'src/style/theme';

const BlogStyled = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`;

export default BlogStyled;


/* 
  https://styled-components.com/docs
  avec styled components on peut utiliser des gabarits étiquetés fournis par la librairie
  c'est à dire qu'on va spécifier une chaine de caractère qui sera traitée par une fonction
  la chaine de caractère contiendra mon css
  la fonction retournera un élement react du type spécifié, ici une div, cette div sera enrichie d'une classe qui appliquera les styles que j'ai définis
*/
