import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import ApiClient from "../services/apiClient";

const useScreenShots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => {
      return apiClient.getAll();
    },
  });
};

export default useScreenShots;
