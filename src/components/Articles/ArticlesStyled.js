import styled from 'styled-components';

import theme from 'src/style/theme';

const ArticlesStyled = styled.main`
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    color: ${theme.primaryColor};
    font-family: ${theme.fontTitle};
    text-align: center;
    font-size: 3em;
    margin: 1rem 0;
  }
`;

export default ArticlesStyled;
