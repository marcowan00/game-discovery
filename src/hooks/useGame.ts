import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => {
      return apiClient.get(slug);
    },
  });
};

export default useGame;
