import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false); //par défaut la collapse est fermée

    //fonction pour afficher le contenu de la collapse
    const display = () => {
        setIsOpen(!isOpen);
    }
    //contenu de la collapse
    return (
        <div className="collapse">
            <div className="collapse-title">
                <p>{title}</p>
                <FontAwesomeIcon 
                    icon={isOpen ? faChevronDown : faChevronUp } 
                    onClick={display}
                    className="collapse-icon"
                    aria-label="Flèche de collapse"
                />
            </div>

            {isOpen && 
                <div className="collapse-content">
                <p>{content}</p>
                </div>}
        </div>
    )
}

export default Accordion;


// Composant Collapse utilise useState pour gérer son état ouvert/fermé
// La prop isOpen est initialise avec false pour afficher le contenu de la collapse par défaut pour qu'il soit fermé
// La fonction display pour afficher le contenu de la collapse en cas de clic sur le titre
// Intègre des icônes FontAwesome pour indiquer visuellement l'état de la collapse (ouverte/fermée)
    // npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
