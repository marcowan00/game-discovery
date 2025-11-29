import { usePlatforms } from "./usePlatforms";

export const useLookupPlatform = (id?: number) => {
  const { data } = usePlatforms();

  return data?.results.find((platform) => platform.id === id);
};
