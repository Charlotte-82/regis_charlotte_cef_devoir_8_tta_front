import { useState } from "react";
import usePost from "../hooks/usePost";

function FormulaireContact({ artisanNom, artisanEmail }) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    objet: "",
    message: "",
  });

  const { postData, isLoading, isSuccess, error } = usePost(
    "http://localhost:3001/api/contact"
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postData({ ...formData, destinataire: artisanEmail });

    if (!error) {
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        objet: "",
        message: "",
      });
    }
  };

  return (
    <div className="mt-5">
      <hr className="hrTitre2" />
      <h2>
        Contactez l’artisan <strong>{artisanNom}</strong>
      </h2>

      {isSuccess && (
        <p className="alert alert-success">Message envoyé avec succès !</p>
      )}
      {error && <p className="alert alert-danger">Erreur : {error}</p>}

      <form onSubmit={handleSubmit} className="mt-3 formulaireContact">
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Votre nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="objet" className="form-label">
            L'objet de votre message
          </label>
          <input
            type="text"
            id="objet"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Décrivez votre projet
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          ></textarea>

          <div className="radioOption">
            <input type="radio" name="contact" className="radioFormulaire" />
            <label className="labelRadio">Je veux être contacté par mail</label>
          </div>

          <div className="radioOption">
            <input type="radio" name="contact" className="radioFormulaire" />
            <label className="labelRadio">
              Je veux être contacté par téléphone
            </label>
          </div>
        </div>

        <button type="submit" className="boutonBasPage" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Demander un devis"}
        </button>
      </form>
    </div>
  );
}

export default FormulaireContact;
