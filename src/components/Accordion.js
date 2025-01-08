import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const display = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion">
            <div className="accordion-title">
                <p>{title}</p>
                <FontAwesomeIcon 
                    icon={isOpen ? faChevronDown : faChevronUp } 
                    onClick={display}
                    className="accordion-icon"
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

