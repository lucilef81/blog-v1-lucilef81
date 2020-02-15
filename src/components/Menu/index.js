import React from 'react';
import PropTypes from 'prop-types';

import MenuStyled from './MenuStyled';

const Menu = ({ categories, setCurrentCategory, currentCategory }) => {
  return (
    <MenuStyled>
      <nav>
        {categories.map(({ label }, index) => (
          <a
            className={label === currentCategory ? 'active' : ''}
            onClick={() => {
              setCurrentCategory(label);
            }}
            key={`category-${index}`}
          >
            {label}
          </a>
        ))}
      </nav>
    </MenuStyled>
  );
};

Menu.propTypes = {
  categories: PropTypes.array.isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

export default Menu;
