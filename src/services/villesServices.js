import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getVillesBySpecialite = (specialite) => {
  return axios.get(
    `${API_BASE_URL}/api/villes/par-specialite/${encodeURIComponent(
      specialite
    )}`
  );
};
