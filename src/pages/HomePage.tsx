import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameFilterHeader from "../components/GameFilterHeader";
import GameGrid from "../components/GameGrid";
import GenreDrawer from "../components/GenreDrawer";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

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
