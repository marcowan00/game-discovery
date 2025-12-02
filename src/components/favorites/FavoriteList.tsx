import { VStack } from "@chakra-ui/react";
import useFavoritesStore from "../../stores/favoritesStore";
import FavoriteGameCard from "./FavoriteGameCard";

const FavoriteList = () => {
  const favorites = useFavoritesStore((s) => s.favorites);

  return (
    <VStack gap={8}>
      {favorites.map((game) => (
        <FavoriteGameCard key={game.id} game={game} />
      ))}
    </VStack>
  );
};

export default FavoriteList;
