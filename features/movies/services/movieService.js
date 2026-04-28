import { api } from "../../../services/api";

export async function getPopularMovies() {
  const response = await api.get("/movie/popular", {
    params: {
      language: "pt-BR",
      page: 1,
    },
  });

  return response.data.results;
}
export const getElencoMovie = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`, {
    params: {
      language: "pt-BR"
    },
  });

  return response.data.cast.map((actor) => ({
    id: actor.id,
    nome: actor.name,
    personagem: actor.character,
    imagem: `https://image.tmdb.org/t/p/w200${actor.profile_path}`,
  }));
};