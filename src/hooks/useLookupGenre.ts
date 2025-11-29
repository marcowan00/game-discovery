import { useGenres } from "./useGenres";

export const useLookupGenre = (id?: number) => {
  const { data } = useGenres();

  return data?.results.find((genre) => genre.id === id);
};
