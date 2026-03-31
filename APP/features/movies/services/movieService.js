import { api } from "../../../services/api";

const POSSIBLE_ROUTES = [
  "/filmes",
];

let workingRoute = null;


const findWorkingRoute = async () => {
  for (let route of POSSIBLE_ROUTES) {
    try {
      const response = await api.get(route);
      if (Array.isArray(response.data)) {
        workingRoute = route;
        console.log("Rota encontrada:", route);
        return route;
      }
    } catch (e) {}
  }

  throw new Error("Nenhuma rota válida encontrada");
};

export const getMovies = async () => {
  try {
    if (!workingRoute) {
      await findWorkingRoute();
    }

    const response = await api.get(workingRoute);
    return response.data;
  } catch (error) {
    console.log("Erro GET:", error.message);
    return [];
  }
};

export const createMovie = async (movie) => {
  try {
    if (!workingRoute) {
      await findWorkingRoute();
    }

    const response = await api.post(workingRoute, movie);
    return response.data;
  } catch (error) {
    console.log("Erro POST:", error.message);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    if (!workingRoute) {
      await findWorkingRoute();
    }
    const encodedId = encodeURIComponent(String(id));
    await api.delete(`${workingRoute}/${encodedId}`);
  } catch (error) {
    console.log("Erro DELETE:", error.message);
    throw error;
  }
};