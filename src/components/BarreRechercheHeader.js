import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BarreRecherche() {
  const [recherche, setRecherche] = useState("");
  const navigate = useNavigate();
  const [afficherInput, setAfficherInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recherche.trim()) {
      navigate(`/construction`);
    }
  };

  const estMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <form onSubmit={handleSubmit} className="barreDeRecherche">
      {(afficherInput || !estMobile) && (
        <input
          className="inputRecherche"
          type="text"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          autoFocus
        />
      )}
      <button
        className="boutonLoupe"
        type="button"
        onClick={() => {
          if (estMobile) {
            setAfficherInput((prev) => !prev);
          } else {
            handleSubmit(new Event("submit"));
          }
        }}
      >
        <i className="fas fa-search imageLoupe"></i>
      </button>
    </form>
  );
}

export default BarreRecherche;
