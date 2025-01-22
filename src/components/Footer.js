import logoFooter from "../assets/logo/footer.png";

const year = new Date().getFullYear();
const Footer = () => {
    return (
        <footer className="footer">
            <img className="logo_footer" src={logoFooter} alt="logo de Kasa en blanc" />
            <p className="footer_text">© {year} Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
