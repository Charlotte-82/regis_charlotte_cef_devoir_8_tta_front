import Logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center px-3 py-2 colonneAdresse">
        <div className="imageFooter">
          <img src={Logo} className="logoFooter" alt="Trouve ton artisan!" />
        </div>
        <div className="d-flex flex-column">
          <p className="titreFooter">Antenne de Lyon</p>
          <p className="contentFooter">101 cours Charlemagne</p>
          <p className="contentFooter">CS 20033</p>
          <p className="contentFooter">69269 LYON CÉDEX 02</p>
          <p className="contentFooter">France</p>
          <p className="contentFooter">+33 (0)4 26 73 40 00</p>
        </div>
      </div>
      <hr className="hrFooter" />
      <div className="d-flex justify-content-center pb-5">
        <a href="/construction" className="footerLink">
          Mentions légales
        </a>
        <a href="/construction" className="footerLink">
          Données personnelles
        </a>
        <a href="/construction" className="footerLink">
          Accessibilité
        </a>
        <a href="/construction" className="footerLink">
          Politique des cookies
        </a>
        <a href="/construction" className="footerLink">
          Gestion des cookies
        </a>
      </div>
    </div>
  );
}

export default Footer;
