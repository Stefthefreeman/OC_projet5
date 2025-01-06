import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //icone de FontAwesome pour les étoiles
import { faStar} from "@fortawesome/free-solid-svg-icons"; //une étoile remplie


function Rating({rating}) {
    const notes = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            
            {notes.map((note) => ( 
                note<=rating ?
                <FontAwesomeIcon 
                    key={note}
                    icon={faStar} 
                    className="star-full" 
                /> :
                <FontAwesomeIcon 
                    key={note}
                    icon={faStar} 
                    className="star-empty" 
                />
            ))}
        </div>
    );
}

export default Rating;


// Ce composant reçoit une prop rating qui est une note entre 1 et 5 pour générer les étoiles
// Map affiche les étoiles suivant la note
// Si note est inferieur ou égale Rating, affiche étoile remplie, sinon vide
