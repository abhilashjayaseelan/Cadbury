import { Avatar, Box, Flex, HStack, Icon, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import {MdSettings} from "react-icons/md";

interface user {
  name: string;
}

// css styles
const logo = {
  h: {base: "20px", md: "35px"},
  cursor: 'pointer'
}

const Header = (props: user) => {
  return (
    <Flex
      as="header"
      p="10px"
      pl="40px"
      pr="40px"
      justify="space-between"
      alignItems="center"
    >
      <Box>
        <Image sx={logo} src="data/img/logo-L.jpg" alt="logo"/>
      </Box>
      <Box>
        <Image sx={logo} src="data/img/logo-C.jpg" alt="logo2"/>
      </Box>
      <HStack alignItems="center" h={{base: "20px",md:"35px"}}>
        <Wrap>
          <WrapItem>
            <Avatar cursor="pointer" size="sm" name="John Doe" src="https://bit.ly/dan-abramov" />
          </WrapItem>  
          <Text>{props?.name}</Text>
          <Icon cursor="pointer" mt="5px" as={MdSettings} color="blue"/>
        </Wrap>
      </HStack>
    </Flex>
  );
};

export default Header;
