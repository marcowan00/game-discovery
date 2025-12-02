import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Game } from "../../entities";
import getCroppedImageUrl from "../../services/imageUrl";
import CriticScore from "../game/CriticScore";
import PlatformIconList from "../game/PlatformIconList";
import FavoriteButton from "./FavoriteButton";

interface Props {
  game: Game;
}

const FavoriteGameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      width={{ base: "90%", lg: "70%" }}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      transition="transform 0.15s ease-in-out"
      _hover={{ transform: "scale(1.02)", cursor: "pointer" }}
      onClick={() => navigate("/games/" + game.slug)}
    >
      <Image
        width="150px"
        height="100%"
        src={getCroppedImageUrl(game.background_image)}
      />
      <HStack flex="1" justifyContent="space-between" alignItems="center">
        <CardBody>
          <Box>
            <HStack gap={5} alignItems="center">
              <Heading fontSize="24px">{game.name}</Heading>
              <CriticScore score={game.metacritic} />
            </HStack>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
          </Box>
        </CardBody>
        <CardFooter>
          <FavoriteButton game={game} />
        </CardFooter>
      </HStack>
    </Card>
  );
};

export default FavoriteGameCard;
