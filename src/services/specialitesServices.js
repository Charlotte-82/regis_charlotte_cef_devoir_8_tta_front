import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getSpecialitesByCategorie = (categorie) => {
  return axios.get(
    `${API_BASE_URL}/api/specialites/par-categorie/${encodeURIComponent(
      categorie
    )}`
  );
};
