import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const display = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            {/* Titre avec l'icône animée */}
            <div className="accordion-title" onClick={display}>
                <p>{title}</p>
                <motion.div
                    initial={{rotate: 0}} // Position de départ, sans rotation
                    animate={{
                        rotate: isOpen ? 0 : 180, // Rotation de 180 degrés si isOpen
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    style={{
                        display: "inline-block",
                        transformOrigin: "center", // Rotation autour de la pointe
                        marginRight: "15px"
                    }}
                >
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="accordion-icon"
                    />
                </motion.div>
            </div>

            {/* Contenu animé */}
            <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{
                    height: isOpen ? "auto" : 0, // L'élément s'ouvre en augmentant la hauteur
                    opacity: isOpen ? 1 : 0,     // L'élément devient visible
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut", // Fluidité de l'animation
                }}
                className="collapse-content"
            >
                <motion.p
                    initial={{opacity: 0, y: -10}}  // Position de départ légèrement en haut
                    animate={{
                        opacity: isOpen ? 1 : 0, // Apparition du texte
                        y: isOpen ? 0 : -30,     // Descente du texte (y: 0 à -10)
                    }}
                    transition={{
                        duration: 1, // Durée de l'animation du texte
                        ease: "easeInOut", // Fluidité de l'animation
                    }}
                >
                    {content}
                </motion.p>
            </motion.div>
        </div>
    );
}

export default Accordion;
