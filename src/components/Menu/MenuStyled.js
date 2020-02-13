import styled from 'styled-components';

import theme from 'src/style/theme';

/* 
  on peut utiliser l'imbrication pour générer des selecteur sur plusieurs niveaux

  avec & on peut reprendre le sélecteur parent sans avoir à le récrire
*/
/*
.header { -> .header

  a { -> .header a

    &.toto { -> .header a.toto

    }

    .machin { -> .header a .machin

    }

  }

}
*/

const MenuStyled = styled.header`
  text-align: center;
  padding: 2rem;
  border-bottom: 1px solid #ddd;

  a {
    color: #101010;
    margin: 0 1em;
    cursor: pointer;

    &:hover {
      color: ${theme.primaryColor};
    }
  }
`;

export default MenuStyled;
