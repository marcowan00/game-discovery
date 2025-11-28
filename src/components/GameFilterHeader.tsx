import {
  Heading,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import useGamesCount from "../hooks/useGamesCount";
import useLookupGenre from "../hooks/useLookupGenre";
import useLookupPlatform from "../hooks/useLookupPlatform";
import useGameQueryStore from "../stores/gameQueryStore";

const GameFilterHeader = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useLookupPlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useLookupGenre(genreId);

  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { gamesCount, isLoading } = useGamesCount();
  const isFiltering = !!(selectedPlatform || selectedGenre || searchText);

  const headingText =
    isLoading && isFiltering
      ? "Discovering..."
      : isFiltering
      ? `Found ${gamesCount || 0} games.`
      : "Discover your favorite games.";

  return (
    <>
      <Heading as="h1" marginY={5} fontSize="5xl">
        {headingText}
      </Heading>
      {isFiltering && (
        <HStack marginTop={3} marginBottom={5}>
          {searchText && (
            <Tag size="md" borderRadius="full">
              <TagLabel>Searching: "{searchText}"</TagLabel>
              <TagCloseButton onClick={() => setSearchText(undefined)} />
            </Tag>
          )}
          {selectedPlatform && (
            <Tag size="md" borderRadius="full">
              <TagLabel>Platform: {selectedPlatform.name}</TagLabel>
              <TagCloseButton onClick={() => setPlatformId(undefined)} />
            </Tag>
          )}
          {selectedGenre && (
            <Tag size="md" borderRadius="full">
              <TagLabel>Genre: {selectedGenre.name}</TagLabel>
              <TagCloseButton onClick={() => setGenreId(undefined)} />
            </Tag>
          )}
        </HStack>
      )}
    </>
  );
};

export default GameFilterHeader;
