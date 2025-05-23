import { useEffect, useState } from "react";

const useFetchParam = (apiFunction, param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!param);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!param) return;

    setLoading(true);
    apiFunction(param)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiFunction, param]);

  return { data, loading, error };
};

export default useFetchParam;
