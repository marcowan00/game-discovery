import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useGenres } from "../hooks";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../stores/gameQueryStore";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const handleGenreClick = (id: number) => {
    setSelectedGenreId(id);
    window.scrollTo({ top: 0 });
  };

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                fontSize="md"
                variant="link"
                minWidth={0}
                onClick={() => handleGenreClick(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
