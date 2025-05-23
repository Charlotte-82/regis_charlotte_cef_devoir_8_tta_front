import Architecte from "../assets/images/architecte.png";
import Logo from "../assets/images/Logo.png";
import Arrow from "../assets/images/down-arrow.png";
import BarreRecherche from "./BarreRechercheHeader";

function Header() {
  return (
    <div className="d-flex headerBox">
      <div className="d-flex align-items-center">
        <a href="/">
          <img src={Architecte} className="architecte" alt="icône d'artisan" />
          <img src={Logo} className="logo" alt="Trouve ton artisan!" />
        </a>
      </div>

      <div className="d-flex flex-column align-items-end headerDesktop">
        <div className="barre">
          <BarreRecherche />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/par-categorie/alimentation">
                  Alimentation{" "}
                  <img src={Arrow} alt="flèche" className="ms-1 iconeMenu" />
                </a>
                <a className="nav-link" href="/par-categorie/batiment">
                  Bâtiment{" "}
                  <img src={Arrow} alt="flèche" className="ms-1 iconeMenu" />
                </a>
                <a className="nav-link" href="/par-categorie/fabrication">
                  Fabrication{" "}
                  <img src={Arrow} alt="flèche" className="ms-1 iconeMenu" />
                </a>
                <a className="nav-link" href="/par-categorie/services">
                  Services{" "}
                  <img src={Arrow} alt="flèche" className="ms-1 iconeMenu" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
