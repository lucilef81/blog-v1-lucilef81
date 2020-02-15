// on importe useEffect
/*
  useEffect(() => {}); // on définit un callback executé à chaque rendu (montage + mise à jour)
  useEffect(() => {}, []); // on définit un callback executé uniquement au rendu de montage
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import theme from 'src/style/theme';

import BlogStyled from './BlogStyled';

const Blog = () => {
  const [currentCategory, setCurrentCategory] = useState('Accueil');
  // on récupère un moyen de lire l'état, et de changer l'état
  // changer l'état = déclencher un nouveau rendu de mise à jour
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  let selectedPosts = posts;
  if (currentCategory !== 'Accueil') {
    selectedPosts = posts.filter((post) => post.category === currentCategory);
  }

  const fetchPosts = () => {
    // on déclenche une requete qui prendra un certain temps
    axios
      .get('https://oclock-open-apis.now.sh/api/blog/posts')
      // en cas de succès
      .then((response) => {
        // on change l'état
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

  const fetchCategories = async () => {
    const response = await axios.get(
      'https://oclock-open-apis.now.sh/api/blog/categories',
    );

    setCategories(response.data);
  };

  // on déclenche un effet au premier rendu du composant
  // on utilisera useEffect chaque fois qu'on a besoin de faire qqch après que le DOM réel ait été calculé, par ex :
  // - Déclencher un chargement initial depuis une api
  // - Chaque fois qu'on a besoin de lire le dom réel
  // - Dès qu'on a besoin d'accéder à un element du DOM au dessus de mon application
  useEffect(fetchPosts, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  // j'ajoute un effet qui s'execute au montage du blog = au premier rendu
  useEffect(() => {
    // j'ajoute un écouteur su window
    window.addEventListener('keyup', (event) => {
      // si la touche enfoncée par l'utilisateur est echap
      if (event.key === 'Escape') {
        // je veux aller sur la home -> je change l'état de mon application, il y aura un nouveau rendu
        setCurrentCategory('Accueil');
      }
    });
  }, []);

  // version non optimisée : après CHAQUE rendu on déclenche un effet
  // useEffect(() => {
  //   console.log('nouveau rendu, je change le titre');
  //   document.title = `${currentCategory} - Blog React`;
  // });

  // version optimisée : après chaque rendu où currentCategory change, mais pas le rendu ou currentCategory change pas
  useEffect(() => {
    console.log('nouveau rendu où currentCategory change, je change le titre');
    document.title = `${currentCategory} - Blog React`;
  }, [currentCategory]);

  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {/* on conditionne notre jsx en fonction des données venant de l'état */}
      {posts.length === 0 && (
        <ReactLoading
          type="spin"
          color={theme.primaryColor}
          height={50}
          width={50}
        />
      )}
      {posts.length !== 0 && (
        <Articles category={currentCategory} articles={selectedPosts} />
      )}
      <Footer />
    </BlogStyled>
  );
};

export default Blog;
