import React from 'react';
import PropTypes from 'prop-types';

import Article from 'src/components/Article';

import ArticlesStyled from './ArticlesStyled';

const Articles = ({ articles, category }) => {
  const articleCount = articles.length > 1 ? 'Articles' : 'Article';
  const title = (category === 'Accueil') ? 'Dev of Thrones' : `${articleCount} de la catégorie ${category}`;
  return (
    <ArticlesStyled>
      <h1>{title}</h1>
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
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  category: PropTypes.string.isRequired,
};

export default Articles;
