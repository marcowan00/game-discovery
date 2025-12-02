import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Game } from "../../entities";
import getCroppedImageUrl from "../../services/imageUrl";
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
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <CardBody>
          <Box>
            <Heading fontSize="24px">{game.name}</Heading>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
          </Box>
        </CardBody>
        <CardFooter>
          <FavoriteButton game={game} />
        </CardFooter>
      </Flex>
    </Card>
  );
};

export default FavoriteGameCard;
