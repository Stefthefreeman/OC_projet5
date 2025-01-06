import React from "react";

function Banner ({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="Bannière" />
      <div className="banner_dark"></div>
      <h1 className="banner_txt">{texte}</h1>
    </div>
  )
}

export default Banner;


// Utilisation des props image et texte pour intégrer dans n'importe quelle page de l'app
// La prop image spécifie l'URL de l'image à afficher
// La prop texte définit le contenu textuel qui apparaîtra sur la bannière