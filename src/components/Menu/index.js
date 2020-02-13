import React from 'react';
import PropTypes from 'prop-types';

import MenuStyled from './MenuStyled';

// j'ai ["Angular", "React", "O’clock", "Autre"]
// je veux [<a>Angular</a>,<a>React</a>,<a>Oclock</a>,<a>Autre</a>]

// https://fr.reactjs.org/docs/events.html

const Menu = ({ categories, setCurrentCategory }) => (
  <MenuStyled>
    <nav>
      {categories.map((category) => (
        <a
          className="truc"
          // on attache l'événement directement sur la description jsx de notre élement
          // on associe une fonction de rappel qui sera executée quand l'événement aura lieu
          // comme à notre habitude on peut récupérer en paramètre un objet représentant l'événement
          onClick={() => {
            // console.log('je clique sur', category);
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
};

export default Menu;
