import { List, ListItem, Flex, Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { BsCurrencyPound, BsFillBarChartLineFill } from "react-icons/bs";
import { SiMarketo } from "react-icons/si";
import { FaListUl } from "react-icons/fa6";
import { RiShapesLine } from "react-icons/ri";

interface ProductSideBarProps {
  productURL: string;
  productName: string;
  productCategory: string;
}

const selectedStyle = {
  bg: "brand.500",
  textColor: "white",
};

const notSelectedStyle = {
  bg: "white",
  textColor: "brand.500",
  border: "1px",
  borderColor: "brand.500",
};

const ProductSideBar: React.FC<ProductSideBarProps> = ({
  productURL,
  productName,
  productCategory,
}) => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Box pb="30px">
        <Image
          src={productURL ? `${productURL}` : ""}
          alt="product"
          pb="20px"
        />
        <Text fontSize="xl" fontWeight="bold" textColor="black">
          {productName}
        </Text>
        <Text fontSize="sm" textColor="black">
          {productCategory}
        </Text>
      </Box>
      <List color="white" spacing={5}>
        <ListItem>
          <NavLink to={"dashboard"}>
            <Box
              w="250px"
              h="40px"
              p="2"
              rounded="md"
              sx={selected === "dash" ? selectedStyle : notSelectedStyle}
              onClick={() => setSelected("dash")}
            >
              <Flex alignItems="center" gap="2" ml="12px">
                <BsFillBarChartLineFill />
                Dashboard
              </Flex>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box
              w="250px"
              h="40px"
              p="2"
              rounded="md"
              sx={selected === "gen" ? selectedStyle : notSelectedStyle}
              onClick={() => setSelected("gen")}
            >
              <Flex alignItems="center" gap="2" ml="12px">
                <SiMarketo />
                General Information
              </Flex>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box
              w="250px"
              h="40px"
              p="2"
              rounded="md"
              sx={selected === "tran" ? selectedStyle : notSelectedStyle}
              onClick={() => setSelected("tran")}
            >
              <Flex alignItems="center" gap="2" ml="12px">
                <FaListUl />
                Transactions
              </Flex>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box
              w="250px"
              h="40px"
              p="2"
              rounded="md"
              sx={selected === "pricing" ? selectedStyle : notSelectedStyle}
              onClick={() => setSelected("pricing")}
            >
              <Flex alignItems="center" gap="2" ml="12px">
                <BsCurrencyPound />
                Pricing
              </Flex>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box
              w="250px"
              h="40px"
              p="2"
              rounded="md"
              sx={selected === "pro" ? selectedStyle : notSelectedStyle}
              onClick={() => setSelected("pro")}
            >
              <Flex alignItems="center" gap="2" ml="12px">
                <RiShapesLine />
                Product features
              </Flex>
            </Box>
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default ProductSideBar;
