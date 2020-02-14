import React, { useState } from 'react';
import axios from 'axios';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';

import BlogStyled from './BlogStyled';

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState('Accueil');
  const [posts, setPosts] = useState([]);

  let selectedPosts = posts;
  if (currentCategory !== 'Accueil') {
    selectedPosts = posts.filter((post) => post.category === currentCategory);
  }

  /*
    à propos des opérateurs logiques
    && = les deux
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false
    false && 'toto' -> false
    true && 'toto' -> 'toto'
    l'interpreteur regarde la valeur de gauche, si c'est false alors l'ensemble est forcemment faux, donc on prend la valeur false
    si la valeur de gauche est true alors on prend la valeur de droite telle quelle, donc si c'est true on prend true, si c'est false on prend false, si c'est "toto" on prend "toto", si c'est 123 on prend 123
    Dans du jsx afficher un booléen ne produit aucun effet donc si c'est false on affiche rien, si c'est true et qu'on a mis du jsx à droite du && on affiche ce jsx
    ---
    marche aussi avec || mais c'est l'inverse
    ou = au moins un des deux
    true || true -> true
    true || false -> true
    false ||  true -> true
    false || false -> false
    false || 'toto' -> 'toto'
    true || 'toto' -> true
    si c'est faux on prend la valeur de droite telle quelle
    si c'est true on prend true
  */

  const fetchPosts = () => {
    // axios retourne une promesse, un code qui va mettre potentiellement longtemps à s'executer
    // le code n'est pas mis en pause
    // quand la promesse est resolue, cad ici quand la requette http est terminée et qu'on a la reponse
    // on va pouvoir réagir
    // https://github.com/axios/axios
    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
      // en cas de succès
      .then((response) => {
        // console.log('succès', response.data);
        // je réassigne ma variable d'état post par son setter ce qui déclenche un nouveau rendu
        // tous les composants sont à nouveau executées, le jsx est à nouveau retournée en fonction de mes data, cad mes variables d'état qui ont changées, donc le jsx retournée change, le rendu de react dom change, l'interface dans le navigateur change
        setPosts(response.data);
      })
      // en cas d'erreur
      .catch((error) => {
        console.error('error', error);
      })
      // dans les 2 cas
      .finally(() => {
        // console.log('la requete est terminée');
      });
  };

  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {posts.length === 0 && (
        <button onClick={fetchPosts} type="button">Cliquez pour charger</button>
      )}
      {posts.length !== 0 && (
        <Articles category={currentCategory} articles={selectedPosts} />
      )}
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
