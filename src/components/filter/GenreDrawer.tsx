import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import { IoMenu } from "react-icons/io5";

const GenreDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<IoMenu />} onClick={onOpen}>
        Genres
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box
            paddingLeft={6}
            paddingBottom={6}
            maxHeight="100vh"
            overflowY="auto"
          >
            <GenreList onSelectGenre={onClose} />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreDrawer;
