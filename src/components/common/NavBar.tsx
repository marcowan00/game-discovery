import { StarIcon } from "@chakra-ui/icons";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { RiGameLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchInput from "../filter/SearchInput";
import DarkModeSwitch from "./DarkModeSwitch";

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
      <Link to="/favorites">
        <HStack marginLeft={{ base: 0, lg: 3 }}>
          <StarIcon boxSize="30px" color="orange" />
          <Text whiteSpace={{ base: "wrap", lg: "nowrap" }}>My Favorites</Text>
        </HStack>
      </Link>
      <Box marginLeft={{ base: 0, lg: 3 }}>
        <DarkModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
