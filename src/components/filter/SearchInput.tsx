import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import useGameQueryStore from "../../stores/gameQueryStore";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const isHomePage = useLocation().pathname === "/";

  const isUserTyping = useRef(false);

  useEffect(() => {
    isUserTyping.current = false;
    setInputValue(searchText || "");
  }, [searchText]);

  // 主页输入后实时搜索 + 防抖
  useEffect(() => {
    if (!isHomePage || !isUserTyping.current) return;

    const debounceTimer = setTimeout(() => {
      setSearchText(inputValue);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [inputValue, setSearchText, isHomePage]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSearchText(inputValue);
        if (!isHomePage) navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={inputValue}
          onChange={(event) => {
            if (isHomePage) isUserTyping.current = true;
            setInputValue(event.target.value);
          }}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
