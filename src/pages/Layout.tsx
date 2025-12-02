import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../components/common/BackToTopButton";
import NavBar from "../components/common/NavBar";

const Layout = () => {
  return (
    <Box maxW="1920px" marginX="auto">
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
      <BackToTopButton />
    </Box>
  );
};

export default Layout;
