import logo from "../assets/logo/logo_header.png";
import { NavLink, useLocation } from "react-router-dom"; //useLocation pour accéder au chemin actuel

const Header = () => {
    const location = useLocation();

    return (
        <header className="header">
            <img className="logo_header" src= {logo} alt="logo de Kasa" />
            <nav className="nav-bar">
                <NavLink to="/" className={({ isActive }) => 
                         (isActive || location.pathname === "/accueil") ? "nav_home active" : "nav_home" }>Accueil
                </NavLink>
                        
                <NavLink to="/about" 
                    className={({ isActive }) => 
                        isActive ? "nav_about active" : "nav_about"}>A propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;


//Utilisation du hook "useLocation" pour définir sur quelle page on se trouve et appliquer la classe correspondante.