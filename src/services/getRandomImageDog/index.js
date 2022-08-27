import api from "../api";

const getRandomImageDog = async (breed) => {
  try {
    const response = await api.get(`breed/${breed}/images/random`);
    return response.data;
  } catch {
    return "";
  }
};

export default getRandomImageDog;
