import useGenres from "./useGenres";

const useLookupGenre = (id?: number) => {
  const { data } = useGenres();

  return data?.results.find((genre) => genre.id === id);
};

export default useLookupGenre;
