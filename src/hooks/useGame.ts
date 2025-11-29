import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Game>("/games");

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => {
      return apiClient.get(slug);
    },
  });
};
