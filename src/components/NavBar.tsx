import { Box, HStack, Icon } from "@chakra-ui/react";
import { RiGameLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/" reloadDocument>
        <Box marginX={{ base: 0, lg: 2 }}>
          <Icon
            as={RiGameLine}
            display="block"
            boxSize={{ base: "50px", lg: "60px" }}
          />
        </Box>
      </Link>
      <SearchInput />
      <Box marginLeft={{ base: 0, lg: 3 }}>
        <DarkModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
