import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useLookupPlatform, usePlatforms } from "../hooks";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useLookupPlatform(platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <Menu closeOnSelect>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          type="radio"
          value={platformId?.toString() || ""}
          onChange={(value) => setPlatformId(Number(value as string))}
        >
          {data?.results.map((platform) => (
            <MenuItemOption
              key={platform.id}
              value={platform.id.toString()}
              // _checked={{ bg: "gray.100", fontWeight: "semibold" }}
            >
              {platform.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
