import { Box, HStack } from "@chakra-ui/react";
import { RiGameLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/" reloadDocument>
        <Box marginX={3}>
          <RiGameLine size="60px" />
        </Box>
      </Link>
      <SearchInput />
      <Box marginLeft={3}>
        <DarkModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
