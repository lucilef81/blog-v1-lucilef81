// on importe useEffect
/*
  useEffect(() => {}); // on définit un callback executé à chaque rendu (montage et mise à jour)
  useEffect(() => {}, []); // on définit un callback executé uniquement rendu de montage
*/
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
  // on récupère un moyen de lire l'état, et de changer l'état
  // changer l'état = déclencher un nouveau rendu de mise à jour
  const [posts, setPosts] = useState([]);

  let selectedPosts = posts;
  if (currentCategory !== 'Accueil') {
    selectedPosts = posts.filter((post) => post.category === currentCategory);
  }

  const fetchPosts = () => {
    // on déclenche une requete qui prendra un certain temps
    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
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

  // on déclenche un effet au premier rendu du composant
  useEffect(fetchPosts, []);


  return (
    <BlogStyled>
      <Menu
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {/* on conditionne notre jsx en fonction des données venant de l'état */}
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
