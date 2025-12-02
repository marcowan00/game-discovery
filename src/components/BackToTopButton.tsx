import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bg = useColorModeValue("gray.700", "white");
  const color = useColorModeValue("white", "gray.800");

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <IconButton
      aria-label="Back to top"
      icon={<ArrowUpIcon />}
      position="fixed"
      bottom={{ base: "30px", lg: "80px" }}
      right={{ base: "20px", lg: "40px" }}
      variant="solid"
      boxSize="56px"
      fontSize="24px"
      borderRadius="full"
      bg={bg}
      color={color}
      _hover={{ transform: "scale(1.1)" }}
      onClick={scrollToTop}
    />
  );
};

export default BackToTopButton;
