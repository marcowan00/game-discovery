import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Game } from "../../entities";
import getCroppedImageUrl from "../../services/imageUrl";
import FavoriteButton from "../favorites/FavoriteButton";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      _hover={{ cursor: "pointer" }}
      onClick={() => navigate("/games/" + game.slug)}
    >
      <Image src={getCroppedImageUrl(game.background_image)} loading="lazy" />
      <Box position="absolute" top={2} right={2}>
        <FavoriteButton game={game} />
      </Box>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
