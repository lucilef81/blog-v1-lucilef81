import React from 'react';
import PropTypes from 'prop-types';

import Article from 'src/components/Article';

import ArticlesStyled from './ArticlesStyled';

const Articles = ({ articles }) => (
  <ArticlesStyled>
    {articles.map((article) => (
      <Article
        key={article.id}
        // title={article.title}
        // excerpt={article.excerpt}
        // category={article.category}
        {...article}
      />
    ))}
  </ArticlesStyled>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Articles;
