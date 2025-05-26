import { useEffect, useState } from "react";

const useFetch = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFunction()
      .then((response) => {
        console.log("Réponse API dans hook:", response);
        setData(response.data.data);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiFunction]);

  return { data, loading, error };
};

export default useFetch;
