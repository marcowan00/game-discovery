import { useGames } from "./useGames";

export const useGamesCount = () => {
  const { data, isLoading, isFetching } = useGames();

  return { gamesCount: data?.pages[0]?.count, isLoading, isFetching };
};
