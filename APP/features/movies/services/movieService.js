import { api } from "../../../services/api";

export const getMovies = async () => {
  try {
    const response = await api.get("/filmes");
    return response.data || [];
  } catch (error) {
    console.error("Erro ao buscar filmes da API:", error);
    throw error;
  }
};

export const createMovie = async (movie) => {
  try {
    const response = await api.post("/filmes", movie);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar filme:", error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await api.delete(`/filmes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar filme:", error);
    throw error;
  }
};