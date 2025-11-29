import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { Genre } from "../entities/Genre";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
