import { useEffect, useState } from "react";

const useFetch = (apiFunction) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiFunction()
      .then((response) => {
        console.log("Réponse API dans hook:", response);

        let result = response.data;

        if (result && Array.isArray(result.data)) {
          result = result.data;
        }

        if (!Array.isArray(result)) {
          console.warn("Réponse inattendue : pas un tableau", result);
          result = [];
        }

        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Erreur dans useFetch :", err);
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiFunction]);

  return { data, loading, error };
};

export default useFetch;
