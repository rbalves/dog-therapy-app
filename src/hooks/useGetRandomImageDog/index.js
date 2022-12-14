import { useEffect, useState } from "react";

import getRandomImageDog from "../../services/getRandomImageDog";

const useGetRandomImageDog = (breedSelected = "retriever/golden") => {
  const [imageDog, setImageDog] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomImage = async (breed = breedSelected) => {
    try {
      setLoading(true);

      const data = await getRandomImageDog(breed);

      setImageDog(data.message);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return { imageDog, loading, error, getRandomImage };
};

export default useGetRandomImageDog;
