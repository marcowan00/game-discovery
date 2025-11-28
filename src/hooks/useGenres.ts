import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, next: null, results: genres },
  });
};

export default useGenres;
