import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import ProductSideBar from "../components/ProductSideBar";

const ProductLayout = () => {
  return (
    <div>
      <Box as="div" mt="20px" pl={{ base: "10px", md: "40px" }}>
        <Text fontSize="2xl" fontWeight="bold" color="blue">
          Product Details
        </Text>
      </Box>
      <Grid
        h={{ md: "1000px" }}
        p="10px"
        pl={{ base: "10px", md: "40px" }}
        pr={{ base: "10px", md: "40px" }}
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={{ base: 1, md: 4 }}
      >
        <GridItem
          as="aside"
          rowSpan={{base: 3, md: 6}}
          colSpan={{ base: 5, md: 1 }}
          p={{ base: "20px", md: "30px" }}
          shadow='xl'
          rounded='md'
        >
          <ProductSideBar
            productURL="product"
            productName="Diary Milk"
            productCategory="Chocolate"
          />
        </GridItem>
        <GridItem rowSpan={12} colSpan={{ base: 5, md: 4 }}>
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
};

export default ProductLayout;
