import { List, ListItem, Wrap, Box, Image, Text } from "@chakra-ui/react";
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
          src={productURL ? `data/img/${productURL}.jpg` : ""}
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
              style={{
                backgroundColor: selected === "dash" ? "blue" : "white",
                color: selected === "dash" ? "white" : "blue",
              }}
              onClick={() => setSelected("dash")}
            >
              <Wrap>
                <BsFillBarChartLineFill />
                Dashboard
              </Wrap>
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
              style={{
                backgroundColor: selected === "gen" ? "blue" : "white",
                color: selected === "gen" ? "white" : "blue",
              }}
              onClick={() => setSelected("gen")}
            >
              <Wrap>
                <SiMarketo />
                General Information
              </Wrap>
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
              style={{
                backgroundColor: selected === "tran" ? "blue" : "white",
                color: selected === "tran" ? "white" : "blue",
              }}
              onClick={() => setSelected("tran")}
            >
              <Wrap>
                <FaListUl />
                Transactions
              </Wrap>
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
              style={{
                backgroundColor: selected === "pricing" ? "blue" : "white",
                color: selected === "pricing" ? "white" : "blue",
              }}
              onClick={() => setSelected("pricing")}
            >
              <Wrap>
                <BsCurrencyPound />
                Pricing
              </Wrap>
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
              style={{
                backgroundColor: selected === "pro" ? "blue" : "white",
                color: selected === "pro" ? "white" : "blue",
              }}
              onClick={() => setSelected("pro")}
            >
              <Wrap>
                <RiShapesLine />
                Product features
              </Wrap>
            </Box>
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};

export default ProductSideBar;
