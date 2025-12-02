import { IconButton, useToast } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Game } from "../entities";
import useFavoritesStore from "../stores/favoritesStore";
import ms from "ms";

interface Props {
  game: Game;
}

const FavoriteButton = ({ game }: Props) => {
  const addFavorite = useFavoritesStore((s) => s.addFavorite);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);
  // 这里注意不能返回函数，否则zustand监听到函数变化才会刷新组件
  const favorited = useFavoritesStore((s) => s.isFavorite(game.id));
  const toast = useToast();

  const handleClick = () => {
    if (favorited) {
      removeFavorite(game.id);
    } else {
      addFavorite(game);
    }
    toast({
      title: favorited ? "Removed from favorites." : "Added to favorites.",
      status: "success",
      duration: ms("3s"),
      isClosable: true,
      position: "top",
    });
  };

  return (
    <IconButton
      colorScheme={favorited ? "yellow" : "gray"}
      aria-label="Add to favorite"
      icon={<StarIcon />}
      onClick={handleClick}
    />
  );
};

export default FavoriteButton;
