import FiltreArtisan from "../components/FiltreArtisans";
import Chevron from "../assets/images/chevron-droit.png";
import { useParams } from "react-router-dom";

function Recherche() {
  const { categorie } = useParams();
  console.log("Nom de la catégorie :", categorie);

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
      <a href={`/par-categorie/${categorie}`} className="lienChemin">
        {categorie}
      </a>{" "}
      <span>
        <img
          src={Chevron}
          alt="icône de chevron vers la droite"
          className="chevronMenu"
        ></img>
      </span>
      {/* contenu page */}
      <h1>Artisans de la catégorie : {categorie}</h1>{" "}
      <FiltreArtisan categorieLibelle={categorie} />
    </div>
  );
}

export default Recherche;
