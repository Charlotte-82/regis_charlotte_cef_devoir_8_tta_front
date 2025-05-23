import AlimCat from "../assets/images/alimentationCat.jpg";
import FabCat from "../assets/images/fabricationCat.jpg";
import BatCat from "../assets/images/batimentCat.jpg";
import ServCat from "../assets/images/servicesCat.jpg";
import Chevron from "../assets/images/chevron-droit.png";

function CategoriePage() {
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
      <a href="/categoriepage" className="lienChemin">
        Catégorie
      </a>
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      {/* contenu page */}
      <h1>Catégories d'artisanat</h1>
      <div className="d-flex justify-content-around px-3 py-4">
        {/* catégorie 1 Alimentation */}
        <div className="card catCard">
          <div className="card-body">
            <hr className="hrTitre2" />
            <h2>Alimentation</h2>
            <a href="/par-categorie/alimentation">
              <button className="boutonDecouvrir">
                Découvrir
                <i className="bi bi-arrow-right flecheDecouvrir"></i>
              </button>
            </a>
          </div>
          <img
            src={AlimCat}
            class="card-img-top"
            alt="une série de verrines sur un buffet remplies de nourriture"
          />
        </div>

        {/* catégorie 2 Fabrication */}
        <div class="card catCard">
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2>Fabrication</h2>
            <a href="/par-categorie/fabrication">
              <button className="boutonDecouvrir">
                Découvrir
                <i className="bi bi-arrow-right flecheDecouvrir"></i>
              </button>
            </a>
          </div>
          <img
            src={FabCat}
            class="card-img-top"
            alt="un atelier composé d'un bureau surlequl se trouvent un ordinateur et différentes machines et derrière le mur est recouvert d'un étagères pleine de différents matériaux"
          />
        </div>
      </div>
      {/* catégorie 3 Bâtiment */}
      <div className="d-flex justify-content-around px-3 py-4">
        <div class="card catCard">
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2>Bâtiment</h2>
            <a href="/par-categorie/batiment">
              <button className="boutonDecouvrir">
                Découvrir
                <i className="bi bi-arrow-right flecheDecouvrir"></i>
              </button>
            </a>
          </div>
          <img
            src={BatCat}
            class="card-img-top"
            alt="une série de verrines sur un buffet remplies de nourriture"
          />
        </div>

        {/* catégorie 4 Services */}
        <div class="card catCard">
          <div class="card-body">
            <hr className="hrTitre2" />
            <h2>Services</h2>
            <a href="/par-categorie/services">
              <button className="boutonDecouvrir">
                Découvrir
                <i className="bi bi-arrow-right flecheDecouvrir"></i>
              </button>
            </a>
          </div>
          <img
            src={ServCat}
            class="card-img-top"
            alt="une série de verrines sur un buffet remplies de nourriture"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriePage;
