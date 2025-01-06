import React from "react";

function Tags({ listTags }) {
    return (
        <div className="tag-container">
            {listTags.map((oneTag) => (
            <span key = {oneTag} className="tag"> {oneTag} </span>             
            ))}
        </div>
    );
}

export default Tags;



//Ce composant Tags reçoit une prop listTags qui est un tableau de tags
//listTags est utilisé dans le composant LogementDetails pour afficher les tags de chaque logement 
//map pour créer un tag par tag dans listTags
//key pour que chaque tag soit unique