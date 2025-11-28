import {
  Heading,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import useLookupGenre from "../hooks/useLookupGenre";
import useLookupPlatform from "../hooks/useLookupPlatform";

interface Props {
  gameQuery: GameQuery;
  onRemovePlatform: () => void;
  onRemoveGenre: () => void;
  onRemoveSearch: () => void;
}

const GameFilterHeader = ({
  gameQuery,
  onRemovePlatform,
  onRemoveGenre,
  onRemoveSearch,
}: Props) => {
  const selectedPlatform = useLookupPlatform(gameQuery.platformId);
  const selectedGenre = useLookupGenre(gameQuery.genreId);
  const { data, isLoading } = useGames(gameQuery);
  const gamesCount = data?.pages[0]?.count;
  const isFiltering = !!(
    selectedPlatform ||
    selectedGenre ||
    gameQuery.searchText
  );

  const heading =
    isLoading && isFiltering
      ? "Discovering..."
      : isFiltering
      ? `Found ${gamesCount || 0} Results.`
      : "Discover your favorite games.";

  return (
    <>
      <Heading as="h1" marginY={5} fontSize="5xl">
        {heading}
      </Heading>
      {isFiltering && (
        <HStack marginTop={3} marginBottom={5}>
          {gameQuery.searchText && (
            <Tag size="md" borderRadius="full">
              <TagLabel>Searching: "{gameQuery.searchText}"</TagLabel>
              <TagCloseButton onClick={onRemoveSearch} />
            </Tag>
          )}
          {selectedPlatform && (
            <Tag size="md" borderRadius="full">
              <TagLabel>Platform: {selectedPlatform.name}</TagLabel>
              <TagCloseButton onClick={onRemovePlatform} />
            </Tag>
          )}
          {selectedGenre && (
            <Tag size="md" borderRadius="full">
              <TagLabel>Genre: {selectedGenre.name}</TagLabel>
              <TagCloseButton onClick={onRemoveGenre} />
            </Tag>
          )}
        </HStack>
      )}
    </>
  );
};

export default GameFilterHeader;
