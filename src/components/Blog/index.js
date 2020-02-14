// on importe useEffect
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';
import theme from 'src/style/theme';

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
    console.log('le chargement est déclenché');
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

  // problème : on veut déclencher un effet, ici un appel à une api
  // seulement une fois quand le composant est monté / rendu une première fois
  // pour les rendus suivants / les mises à jour on ne souhaite pas appelé à nouveau l'api
  // les mises à jours / les nous rendus / les nouvelles executions de nos fonctions composants sont déclenchés par une évolution des états, ou la reception de nouvelles props
  // on va distinguer 3 étape dans la vie du composant :
  // la naissance : le montage -> initialisé par l'instanciation du composant
  // la vie : les mises à jour -> initialisé par la modification d'un état ou la reception de nouvelles props
  // la mort : le démontage -> initialisé par le fait de cesser d'instancier un composant
  // http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  // on va pouvoir réagir à ces phases spécifiques pour déclencher des effets avec :
  // le hook d'effet useEffect
  // fetchPosts();

  // dans le composant si on veut "réagir à un rendu du composant dans le DOM réel" on utilise useEffect
  // la fonction de rappel ici est executée pour toutes les phases de rendu, le rendu initial (montage) et les rendus de mise à jour
  // https://fr.reactjs.org/docs/hooks-effect.html
  // useEffect peut prend un deuxième argument, un tableau de dépendances, si une donnée de ce tableau évolue la fonction de rappel est executé, si ce tableau est vide, la fonction de rappel ne sera executée qu'au montage
  useEffect(fetchPosts, []); // -> ici on a un tableau vide en 2ème argument, l'effet ne sera executé qu'au montage
  // si on ne met rien en 2ème argument la fonction de rappel est executée pour le rendu initial ET les rendus de mise à jour


  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {posts.length === 0 && (
        <ReactLoading type="spin" color={theme.primaryColor} height={50} width={50} />
      )}
      {posts.length !== 0 && (
        <Articles category={currentCategory} articles={selectedPosts} />
      )}
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
