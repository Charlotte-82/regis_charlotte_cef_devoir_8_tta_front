import { useEffect, useState } from "react";

const useFetchParam = (apiFunction, param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!param);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (!param) {
      setLoading(false);
      return;
    }

    setLoading(true);

    apiFunction(param)
      .then((response) => {
        console.log("Réponse API avec param :", response);

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
        console.error("Erreur dans useFetchParam :", err);
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [apiFunction, param]);

  return { data, loading, error };
};

export default useFetchParam;
