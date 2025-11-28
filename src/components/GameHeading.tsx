import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platformResponse } = usePlatforms();
  const { data: genreResponse } = useGenres();

  const heading = `${
    platformResponse.results.find(
      (platform) => platform.id === gameQuery.platformId
    )?.name || ""
  } ${
    genreResponse.results.find((genre) => genre.id === gameQuery.genreId)
      ?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
