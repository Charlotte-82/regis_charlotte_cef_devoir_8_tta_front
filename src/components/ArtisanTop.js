import useFetch from "../hooks/useFetch";
import { getArtisansTop } from "../services/artisansServices";
import { Link } from "react-router-dom";

function TopArtisans() {
  const { data: artisans, loading, error } = useFetch(getArtisansTop);
  console.log("Artisans reçus dans le composant :", artisans);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des artisans.</p>;
  console.log("Artisans :", artisans);

  return (
    <div className="container mt-1">
      <div className="row">
        {artisans.length > 0 ? (
          artisans.map((a, index) => (
            <div className="col-md-4 d-flex divCard" key={index}>
              <div className="card mb-4 topCard">
                {a.image && (
                  <img
                    src={a.image}
                    alt={`Portrait de ${a.nom}`}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h3 className="card-title">
                    <Link className="topLien" to={`/ficheartisan/${a.id}`}>
                      {a.nom}
                    </Link>
                  </h3>
                  <h4 className="card-subtitle mb-2 text-muted h4Text">
                    {a.specialite} — {a.ville}
                  </h4>
                  <p className="noteTop">
                    <strong>Note :</strong> {a.note}/5
                  </p>
                  <p className="proposTop">{a.apropos}</p>
                </div>
                <Link to={`/ficheartisan/${a.id}`}>
                  <button className="boutonDecouvrir">
                    Découvrir
                    <i className="bi bi-arrow-right flecheDecouvrir"></i>
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun artisan à afficher pour le moment.</p>
        )}
      </div>
    </div>
  );
}

export default TopArtisans;
