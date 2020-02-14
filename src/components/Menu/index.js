import React from 'react';
import PropTypes from 'prop-types';

import MenuStyled from './MenuStyled';

const Menu = ({ categories, setCurrentCategory, currentCategory }) => (
  <MenuStyled>
    <nav>
      {categories.map((category) => (
        <a
          className={(category === currentCategory) ? 'active' : ''}
          onClick={() => {
            setCurrentCategory(category);
          }}
          key={category}
        >
          {category}
        </a>
      ))}
    </nav>
  </MenuStyled>
);

Menu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default Menu;
