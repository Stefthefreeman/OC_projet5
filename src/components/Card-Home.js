import React from 'react';
import {Link} from "react-router-dom"; 

function CardHome({image, title, id}) {
    return (
        <Link className="card" to={`/logement/${id}`}>          {/* link vers logement où ${id} est remplacé par l'ID réel du logement */}
        <img className="card_img" src={image} alt={title} />
        <h2 className="card_title">{title}</h2>
        </Link>
    );
}

export default CardHome;



// Composant Card utilisé dans la Gallery pour afficher chaque logement
// Il utilise React Router (Link) pour créer un lien cliquable vers la page détaillée du logement, en utilisant l'ID unique
// Il affiche une image et un titre du logement reçus comme props de Gallery