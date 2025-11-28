import { Box, HStack } from "@chakra-ui/react";
import { RiGameLine } from "react-icons/ri";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Box marginX={3}>
        <RiGameLine size="60px" />
      </Box>
      <SearchInput />
      <Box marginLeft={3}>
        <DarkModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
