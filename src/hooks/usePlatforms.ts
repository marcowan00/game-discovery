import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
