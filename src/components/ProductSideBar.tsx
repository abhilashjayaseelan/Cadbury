import { List, ListItem, Wrap, Box, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
            <Box bg="white" textColor="blue">
              <Wrap>
                <BsFillBarChartLineFill />
                Dashboard
              </Wrap>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box bg="white" textColor="blue">
              <Wrap>
                <SiMarketo />
                General Information
              </Wrap>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box bg="white" textColor="blue">
              <Wrap>
                <FaListUl />
                Transactions
              </Wrap>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box bg="white" textColor="blue">
              <Wrap>
                <BsCurrencyPound />
                Pricing
              </Wrap>
            </Box>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"info"}>
            <Box bg="white" textColor="blue">
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
