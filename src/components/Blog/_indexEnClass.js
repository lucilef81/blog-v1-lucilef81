/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Footer from 'src/components/Footer';
import Menu from 'src/components/Menu';
import Articles from 'src/components/Articles';

import categories from 'src/data/categories';
import posts from 'src/data/posts';

import BlogStyled from './BlogStyled';

// un composant peut être écrit sous forme de classe
// il doit étendre React.Component
class Blog extends React.Component {
  // la méthode constructor est appelé dès qu'on instancie le composant
  constructor() {
    // on execute le constructeur de la class parent
    super();
    // this représente l'instance de ma class ici, on peut lui assigner une propriété state qui contiendra mes données d'état
    this.state = {
      category: 'Angular',
    };
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
  }

  setCurrentCategory(newCategory) {
    // on ne modifie pas létat directement, on passe par la méthode setState sur l'instance de React.Component pour déclencher un nouveau rendu
    this.setState({
      category: newCategory,
    });
  }

  // on pourra définir une méthode qui s'occupe de retourner le jsx
  render() {
    const currentCategory = this.state.category;

    const filteredPosts = posts.filter((post) => post.category === currentCategory);

    return (
      <BlogStyled>
        <Menu categories={categories} setCurrentCategory={this.setCurrentCategory} />
        <Articles articles={filteredPosts} />
        <Footer />
      </BlogStyled>
    );
  }
}

export default Blog;
