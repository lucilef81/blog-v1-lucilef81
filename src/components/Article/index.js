import React from 'react';
import PropTypes from 'prop-types';

import ArticleStyled from './ArticleStyled';

const Article = ({ title, excerpt, category }) => (
  <ArticleStyled>
    <h2>{title}</h2>
    <p className="tag">{category}</p>
    <p>{excerpt}</p>
  </ArticleStyled>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Article;
