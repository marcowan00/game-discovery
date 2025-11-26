import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
