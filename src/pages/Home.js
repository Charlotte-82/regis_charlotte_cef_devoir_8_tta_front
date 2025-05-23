import Chevron from "../assets/images/chevron-droit.png";
import TopArtisans from "../components/ArtisanTop";
import Artisan from "../assets/images/artisan.jpg";

function Home() {
  return (
    <div>
      {/* chemin emprunté par l'utilisateur depuis la page d'accueil */}
      <a href="/" className="lienChemin">
        Accueil
      </a>
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>

      {/* contenu page */}
      <h1>La Plateforme de recherche d'un artisan de votre région</h1>
      <div className="d-flex justify-content-between align-items-start ">
        <div className="d-flex flex-column justify-items-start align-items-start homeText">
          <hr className="hrTitre2" />
          <h2>Comment trouver votre artisan ?</h2>
          <p className="homeP">
            Sur cette plateforme, la région Auvergne-Rhône-Alpes a réuni tous
            les talentueux artisans. Choisissez un métier selon vos besoins, une
            localité et expliquez votre projet pour le voir devenir réalité !
          </p>
          <p className="homeP">
            1. Choisissez la catégorie d’artisanat dans le menu.
          </p>
          <p className="homeP">2. Choisissez un artisan selon sa spécialité.</p>
          <p className="homeP">3. Contactez-le via le formulaire de contact.</p>
          <p className="homeP">4. Une réponse vous sera apportée sous 48h.</p>
          <a href="/categoriepage">
            <button className="boutonDecouvrir">
              Découvrir
              <i className="bi bi-arrow-right flecheDecouvrir"></i>
            </button>
          </a>
        </div>

        <img
          src={Artisan}
          alt="des mains d'artisan maniant un rabot"
          className="imageAccueil"
        ></img>
      </div>
      <div className="d-flex flex-column justify-items-start align-items-start homeText">
        <hr className="hrTitre2" />
        <h2>Artisans du mois</h2>
      </div>
      <TopArtisans />
      <div className="boutonBasPageBox">
        <button className="boutonBasPage">
          <a className="lienBasPage" href="/categoriepage">
            Voir tous les artisans
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
