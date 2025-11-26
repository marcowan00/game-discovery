import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="40px" />
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
