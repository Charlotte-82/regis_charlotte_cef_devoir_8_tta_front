import { useParams } from "react-router-dom";
import Chevron from "../assets/images/chevron-droit.png";
import FormulaireContact from "../components/FormulaireContact";
import { getArtisanById } from "../services/artisansServices";
import useFetchParam from "../hooks/useFetchParam";

function FicheArtisan() {
  const { id } = useParams();

  const { data: artisan, loading, error } = useFetchParam(getArtisanById, id);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement de l’artisan : {error}</p>;
  if (!artisan) return <p>Aucun artisan trouvé.</p>;

  const noteEtoile = (note) => {
    const etoiles = [];
    const arrondi = Math.round(note * 2) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= arrondi) {
        etoiles.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (i - 0.5 === arrondi) {
        etoiles.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        etoiles.push(<i key={i} className="bi bi-star text-warning"></i>);
      }
    }

    return etoiles;
  };

  return (
    <div className="container mt-4">
      <nav className="chemin">
        <a href="/" className="lienChemin">
          Accueil
        </a>
        <img src={Chevron} alt="chevron" className="chevronMenu" />
        <a href="/categoriepage" className="lienChemin">
          Catégorie
        </a>
        <img src={Chevron} alt="chevron" className="chevronMenu" />
        <a
          href={`/par-categorie/${artisan?.specialite?.categorie?.categorie_libelle}`}
          className="lienChemin"
        >
          {artisan?.specialite?.categorie?.categorie_libelle}
        </a>
        <img src={Chevron} alt="chevron" className="chevronMenu" />
        <a
          href={`/par-categorie/${artisan?.specialite?.categorie?.categorie_libelle}`}
          className="lienChemin"
        >
          {artisan?.specialite?.specialite_libelle}
        </a>
        <img src={Chevron} alt="chevron" className="chevronMenu" />
        <a href={`/ficheartisan/${artisan?.id_artisan}`} className="lienChemin">
          {artisan?.artisan_nom}
        </a>
      </nav>

      <div>
        <h1>{artisan.artisan_nom}</h1>
        <hr className="hrTitre2" />
        <h2>{artisan.specialite?.specialite_libelle || "Non renseignée"}</h2>

        <div className="row">
          <div className="col colonneImage">
            <img
              src={artisan.artisan_image}
              alt={artisan.artisan_nom}
              className="imageFiche"
            />
          </div>

          <div className="col colonneVille">
            <p>
              <strong>Ville :</strong>{" "}
              {artisan?.ville?.ville_nom || "Non renseignée"}
            </p>
            <p>{artisan.artisan_apropos}</p>
            <p>
              <strong>Note :</strong> {noteEtoile(Number(artisan.artisan_note))}{" "}
              ({artisan.artisan_note}/5)
            </p>

            {artisan?.artisan_site && (
              <p>
                <a href={artisan.artisan_site} target="_blank" rel="noreferrer">
                  <button className="boutonDecouvrir">
                    Aller sur le site de cet artisan
                    <i className="bi bi-arrow-right flecheDecouvrir"></i>
                  </button>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <FormulaireContact
        artisanNom={artisan.artisan_nom}
        artisanEmail={artisan.artisan_email}
      />
    </div>
  );
}

export default FicheArtisan;
