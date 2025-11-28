import usePlatforms from "./usePlatforms";

const useLookupPlatform = (id?: number) => {
  const { data } = usePlatforms();

  return data?.results.find((platform) => platform.id === id);
};

export default useLookupPlatform;
