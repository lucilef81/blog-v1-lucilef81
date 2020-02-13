import React from 'react';
import PropTypes from 'prop-types';

import MenuStyled from './MenuStyled';

const Menu = ({ categories }) => {
  console.log(categories);
  // j'ai ["Angular", "React", "O’clock", "Autre"]
  // je veux [<a>Angular</a>,<a>React</a>,<a>Oclock</a>,<a>Autre</a>]
  return (
    <MenuStyled>
      <nav>
        {categories.map((category) => <a key={category}>{category}</a>)}
      </nav>
    </MenuStyled>
  );
};

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menu;
