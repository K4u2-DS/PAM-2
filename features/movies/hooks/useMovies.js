import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieService";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const data = await getPopularMovies();
      setMovies(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
};