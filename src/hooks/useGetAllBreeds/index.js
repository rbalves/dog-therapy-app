import { useEffect, useState } from "react";

import getAllBreeds from "../../services/getAllBreeds";

const useGetAllBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllBreedsList = async () => {
    try {
      setLoading(true);

      const data = await getAllBreeds();

      setBreeds(
        Object.entries(data.message).reduce((acc, item) => {
          const [breed, types] = item;

          if (types.length) {
            return [
              ...acc,
              ...types.map((type) => ({
                value: `${breed}/${type}`,
                label: `${type} ${breed}`.replace(
                  /\b[a-z]/g,
                  function (letter) {
                    return letter.toUpperCase();
                  }
                ),
              })),
            ];
          }

          return [
            ...acc,
            {
              value: breed,
              label: breed.replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
              }),
            },
          ];
        }, [])
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBreedsList();
  }, []);

  return { breeds, loading, error };
};

export default useGetAllBreeds;
