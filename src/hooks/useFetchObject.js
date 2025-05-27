import { useEffect, useState } from "react";

const useFetchObject = (apiFunction, param) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!param);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (!param) {
      setLoading(false);
      return;
    }

    apiFunction(param)
      .then((response) => {
        console.log("Réponse API (objet attendu) :", response);
        const result = response.data;

        if (result && typeof result === "object" && !Array.isArray(result)) {
          if (isMounted) {
            setData(result);
            setLoading(false);
          }
        } else {
          console.warn("Réponse inattendue : ce n’est pas un objet :", result);
          if (isMounted) {
            setData(null);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
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

export default useFetchObject;
