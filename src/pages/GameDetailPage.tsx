import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/common/ExpandableText";
import FavoriteButton from "../components/favorites/FavoriteButton";
import GameAttributes from "../components/game/GameAttributes";
import GameScreenshots from "../components/game/GameScreenshots";
import GameTrailer from "../components/game/GameTrailer";
import { useGame } from "../hooks";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={5}
      paddingX={{ base: 1, lg: 10 }}
      paddingY={5}
    >
      <GridItem>
        <Flex marginBottom={5} gap={10}>
          <Heading>{game.name}</Heading>
          <FavoriteButton game={game} />
        </Flex>
        <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Box marginBottom={5}>
          <GameTrailer gameId={game.id} />
        </Box>
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
