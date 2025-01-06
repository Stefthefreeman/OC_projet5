import React from "react";
import { useParams } from "react-router-dom";

import LogementDetails from "../components/LogementDetails/LogementDetails";

function Logement() {
     const {id} = useParams();
    return (
        <div>
            <LogementDetails id={id} />
        </div>
    );
}

export default Logement;



// UseParams est un Hook pour extraire des paramètres de l'URL (dans ce cas, l'ID du logement)
// L'ID est utilisé dans le composant LogementDetailsDisplay pour afficher les info du logement correspondant