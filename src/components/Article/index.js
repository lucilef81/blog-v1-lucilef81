import React from 'react';
import PropTypes from 'prop-types';
import DomPurify from 'dompurify';

import ArticleStyled from './ArticleStyled';

const Article = ({ title, excerpt, category }) => {
  // par défaut dans react, si on essaye d'afficher une chaine de caractères qui contient du html, le html n'est pas interprété
  // tant mieux car ça nous protège des failles XSS
  // si on veut malgré tout interpréter le html on pourra utiliser dangerouslySetInnerHTML
  // https://fr.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

  const createMarkup = () => {
    // attention avec dangerouslySetInnerHTML on ouvre une faille de sécurité
    // potentiellement si le html qu'on insère comporte des script on pourra executer des choses qu'on voudrait pas, par exemple si on récupère une donnée corrompue d'un api ça pourrait rediriger tous nos visiteurs sur un site autre
    // je DOIS nettoyer le contenu html que je veux insérer
    // ici pour nettoyer j'ai utiliser une librairie qui le fait très bien
    const cleanedExcerpt = DomPurify.sanitize(excerpt);
    // on peut configurer sanitize (merci la doc)
    // const cleanedExcerpt = DomPurify.sanitize(excerpt, { ALLOWED_TAGS: ['em', 'strong'] });
    return { __html: cleanedExcerpt };
  };
  // const createMarkup = () => ({ __html: excerpt });

  return (
    <ArticleStyled>
      <h2>{title}</h2>
      <p className="tag">{category}</p>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </ArticleStyled>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Article;
