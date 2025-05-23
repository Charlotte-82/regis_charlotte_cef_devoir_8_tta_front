import { useState } from "react";

const usePost = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’envoi");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setIsLoading(false);
    }
  };

  return { postData, isLoading, isSuccess, error };
};

export default usePost;
