import React, { Fragment } from "react"; 
import Logements from "../../datas/logements.json";
//navigatgion pour afficher la page erreur
import { Navigate } from "react-router-dom";
// les composants
import Tags from "./Tags";
import Diaporama from "./Diaporama";
import HostPerson from "./HostPerson";
import Rating from "./Rating";
import Accordion from "../Accordion.js";

function LogementDetails({id}) {
    
    //vérification si logement existe sinon redirection vers page erreur
    const logement = Logements.find((logement) => logement.id === id);
    if (!logement) {
        return <Navigate to="/error" replace />
    }
    //Affichage des logements
    return (
        <>
            <Diaporama pictures={logement.pictures} />
                    <div className="logement-details">
                        <div className="logement-details-location">
                            <h2 className="title-logement">{logement.title}</h2>
                            <p className="location">{logement.location}</p>
                            <Tags listTags={logement.tags} />
                        </div>

                        <div className="logement-details-host">
                            <HostPerson host={logement.host} />
                            <Rating rating={logement.rating} />
                        </div>
                    </div>

                    <div className="collapse-logement">
                        <div className="collapse-description">
                        <Accordion title="Description" content={logement.description} />
                        </div>

                        <div className="collapse-equipements">
                        <Accordion title="Equipements"
                                   content={
                                    <ul> {logement.equipments.map((Equipment, index) =>
                                           <li key={index}>{Equipment}</li>
                                         )}
                                    </ul>
                                  }      
                        />
                        </div>
                    </div>
        </>
    );
}

export default LogementDetails;

