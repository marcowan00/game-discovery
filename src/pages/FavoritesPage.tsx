import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FavoriteList from "../components/favorites/FavoriteList";
import useFavoritesStore from "../stores/favoritesStore";

const FavoritesPage = () => {
  const favoritesCount = useFavoritesStore((s) => s.favorites.length);

  if (favoritesCount === 0) {
    return (
      <Box textAlign="center" paddingY={20}>
        <Heading size="lg" marginBottom={4}>
          Nothing here.
        </Heading>
        <Link to="/">
          <Text
            fontSize="lg"
            color="gray.500"
            marginBottom={6}
            textDecoration="underline"
            transition="color 0.15s ease-in-out"
            _hover={{ color: "gray.800" }}
          >
            Go find your favorite games!
          </Text>
        </Link>
      </Box>
    );
  }

  return (
    <Box paddingY={10}>
      <FavoriteList />;
    </Box>
  );
};

export default FavoritesPage;
