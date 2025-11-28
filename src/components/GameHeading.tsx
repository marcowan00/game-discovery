import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useLookupGenre from "../hooks/useLookupGenre";
import useLookupPlatform from "../hooks/useLookupPlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatform = useLookupPlatform(gameQuery.platformId);
  const selectedGenre = useLookupGenre(gameQuery.genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
