import api from "../api";

const getAllBreeds = async () => {
  try {
    const response = await api.get(`breeds/list/all`);
    return response.data;
  } catch {
    return "";
  }
};

export default getAllBreeds;
