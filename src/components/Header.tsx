import { Avatar, Box, Flex, HStack, Icon, Image, Text} from "@chakra-ui/react";
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
      pl={{base: "10px", md: "40px"}}
      pr={{base: "10px", md: "40px"}}
      justify="space-between"
      alignItems="center"
      border="1px"
      borderColor="gray.300"
    >
      <Box>
        <Image sx={logo} src="https://res.cloudinary.com/dgjwhf8i3/image/upload/v1696963813/ipbipmtvd46noxtilitk.jpg" alt="logo"/>
      </Box>
      <Box>
        <Image sx={logo} src="https://res.cloudinary.com/dgjwhf8i3/image/upload/v1696963819/kzayeyek1bwutbuseqhn.jpg" alt="logo2"/>
      </Box>
      <HStack alignItems="center" h={{base: "20px",md:"35px"}}>
        <Avatar cursor="pointer" size="sm" name="John Doe" src="https://bit.ly/dan-abramov" />
        <Text color="brand.500" fontWeight='semibold'>{props?.name}</Text>
        <Icon cursor="pointer" as={MdSettings} color="brand.500"/> 
      </HStack>
    </Flex>
  );
};

export default Header;
