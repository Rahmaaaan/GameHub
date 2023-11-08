import { ColorModeContext, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputs from "./SearchInputs";

interface Props {
  onSearch: (serachText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px 25px 5px 5px">
      <Image src={logo} boxSize="60px" />
      <SearchInputs onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
