// on importe déjà la fonction useState fourni par react via un import nommé
// on reconnait les fonctions des hooks car elles commencent par convention par use
import React, { useState } from 'react';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';
import posts from 'src/data/posts';

import BlogStyled from './BlogStyled';

const Blog = () => {
  // on a décrit une représentation dans l'ui en fonction d'un jeu de donnée
  // pour rester en déclaratif, il nous faut pouvoir modifier le jeu de donnée en réponse à une intéraction, et déclencher un nouveau rendu de l'ui

  // on va gérer une variable d'état à l'aide du hook d'état
  // https://fr.reactjs.org/docs/hooks-intro.html
  // on pourra gérer via un état toutes nos données susceptible d'évoluer dans le temps, en fonction d'intéraction
  // la modification d'une variable d'état entrainera automariquement un nouveau rendu de l'interface à jour pour les données à jour

  // en executant useState on dit "je vais utiliser une variable d'état, c'est à dire une valeur qui pourra évoluer dans le temps"
  // la valeur transmise en argument est la valeur initiale
  // useState retourne un tableau avec 2 choses :
  // - en 1er la valeur courante de notre état / un accès en lecture à notre état
  // - en 2ème une fonction, un moyen de modifier notre état en déclanchant un nouveau rendu / une mise à jour de l'interface pour cet état / un accès en écriture à notre état
  // on va souvent préféré destructurer le retour de useState pour récupérer l'état et le setter
  let [currentCategory, setCurrentCategory] = useState('Angular');

  const filteredPosts = posts.filter((post) => post.category === currentCategory);

  /*
    on a décrit via nos composants imbriqués l'ui en fonction de nos données
    render matérialise une première fois cette description dans le dom

    on peut préparer des informations en fonction de données
    certaines données pourront évoluer dans le temps
    pour pouvoir redeclencher le rendu quand ces données changent, on va utiliser les setter retournés par useState
  */

  return (
    <BlogStyled onClick={() => {
      // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
      // ce code n'est pas bon, on ne doit JAMAIS modifier directement une variable d'état (retournée par useState)
      // on devra passer par le setter pour la modifier ET déclencher un rendu / une maj de l'ui
      // // lors d'une intéraction je veux redéfinir ma donnée
      // currentCategory = 'React';
      // // et refaire le rendu avec ces nouvelles données
      // render() ???
      // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
      setCurrentCategory('React');
    }}>
      <Menu categories={categories} />
      <Articles articles={filteredPosts} />
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
