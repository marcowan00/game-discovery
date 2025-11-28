import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLookupPlatform from "../hooks/useLookupPlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onselectPlatformId: (platformId?: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onselectPlatformId,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = useLookupPlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu closeOnSelect>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          type="radio"
          value={selectedPlatformId?.toString() || ""}
          onChange={(value) => onselectPlatformId(Number(value as string))}
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
