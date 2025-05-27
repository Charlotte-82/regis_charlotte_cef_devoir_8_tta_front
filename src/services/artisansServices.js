import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const ARTISANS_URL = `${API_BASE_URL}/api/artisans`;

export const getTousLesArtisans = () => {
  return axios.get(ARTISANS_URL);
};

export const getArtisansParCategorie = (categorie) => {
  return axios.get(
    `${ARTISANS_URL}?categorie=${encodeURIComponent(categorie)}`
  );
};

export const getArtisanById = (id) => {
  return axios.get(`${ARTISANS_URL}/${id}`);
};

export const getArtisansParSpecialite = (specialite) => {
  return axios.get(
    `${ARTISANS_URL}?specialite=${encodeURIComponent(specialite)}`
  );
};

export const getArtisansTop = () => {
  return axios.get(`${ARTISANS_URL}/top`);
};

return axios
  .get(`${API_BASE_URL}/api/artisans/filtres`, {
    params: { specialite, ville },
  })
  .then((res) => {
    getArtisansFiltres(specialiteChoisie, villeChoisie).then((res) => {
      console.log("Réponse brute filtres :", res);
      // ...
    });
    const data = res.data;
    return Array.isArray(data) ? data : data.artisans || [];
  });
