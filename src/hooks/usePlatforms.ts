import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import { Platform } from "../entities";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};
