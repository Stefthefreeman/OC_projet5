import logoFooter from "../assets/logo/footer.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="logo_footer" src={logoFooter} alt="logo de Kasa en blanc" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;



// Composant réutilisable pour dans toutes les pages
// Il importe et affiche un logo et inclut un texte de copyright