import styled from 'styled-components';

import theme from 'src/style/theme';

const ArticleStyled = styled.article`
  width: 50%;
  padding: 2rem;

  &:hover {
    background-color: #f0f0f0;
  }

  em {
    opacity: 0.3;
  }

  strong {
    background-color: yellow;
  }

  h2 {
    font-family: ${theme.fontTitle};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5em;
  }

  .tag {
    background-color: ${theme.primaryColor};
    padding: 0.5rem;
    color: #fff;
    border-radius: 3px;
    display:inline-block;
    margin: 0.5rem 0;
    font-size: 0.8em;
  }
`;

export default ArticleStyled;
