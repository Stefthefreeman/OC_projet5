import { Link } from "react-router-dom"; //Composant pour les liens de navigation

const Error404 = () => {
    return (
        <>
        <div className="error_content">
            <h1 className="error_number">404</h1>
            <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className = "error_link_home" to="/">Retourner sur la page d'accueil</Link>
        </div>
        </>
    );
};

export default Error404;



// Ce composant affiche le contenu de la page d'erreur 404
// si l'url n'est pas parmis les routes de App.js
// si logement inexistant 
// Le composant Link redirige vers la page d'accueil