import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameFilterHeader from "../components/filter/GameFilterHeader";
import GameGrid from "../components/game/GameGrid";
import GenreDrawer from "../components/filter/GenreDrawer";
import GenreList from "../components/filter/GenreList";
import PlatformSelector from "../components/filter/PlatformSelector";
import SortSelector from "../components/filter/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Box
            position="sticky"
            top="0px"
            maxHeight="calc(100vh - 120px)"
            overflowY="auto"
          >
            <GenreList />
          </Box>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameFilterHeader />
          <Flex paddingLeft={2} marginBottom={5} flexWrap="wrap" gap={3}>
            <Show below="lg">
              <GenreDrawer />
            </Show>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
