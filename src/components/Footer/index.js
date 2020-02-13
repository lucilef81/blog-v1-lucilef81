import React from 'react';

import FooterStyled from './FooterStyled';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <FooterStyled>
      <p>DevOfThrones, le blog du développeur React {year} &copy;</p>
    </FooterStyled>
  );
};

export default Footer;

// // a propos des fléchées
// // on écrit le corps de la fonction entre { }
// // on peut écrire des instructions puis retourner quelque chose
// const addition = () => {
//   const a = 3;
//   const b = 5;
//   const result = a + b;
//   return result;
// };

// // dans le cas où on retourne directement, on peut l'écrire sans rien changer avec un return explicite
// const addition = () => {
//   return 3 + 5;
// }
// // on peut aussi rendre le return implicite, en ne l'écrivant pas et en n'écrivant pas les { }
// const addition = () => 3 + 5;
// // on peut aussi si on veut, entourer le retour avec des parenthèses pour la lisibilité, pratique lorsqu'on retourne du jsx sur plusieus lignes
// const addition = () => (
// 3 + 5
// );
