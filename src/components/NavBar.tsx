import { Box, HStack } from "@chakra-ui/react";
// import logo from "../assets/react.svg";
import { RiGameLine } from "react-icons/ri";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      {/* <Image src={logo} boxSize="50px" marginX={3} /> */}
      <Box marginX={3}>
        <RiGameLine size="60px" />
      </Box>
      <SearchInput onSearch={onSearch} />
      <Box marginLeft={3}>
        <DarkModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
