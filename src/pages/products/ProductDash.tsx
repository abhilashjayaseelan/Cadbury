import { Grid, GridItem } from "@chakra-ui/react";
import ProductRevenue from "../../components/ProductRevenue";
import productRevenueData from "../../data/productRevenueData.json";

interface revenueData {
  units: number;
  machines: number;
  revenue: number;
}

// Dummy Data
const dummyData: revenueData = productRevenueData[0];

const ProductDash = () => {
  return (
    <Grid
      h={{ md: "700px" }}
      templateRows="repeat(7, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={{ base: 1, md: 4 }}
    >
      <GridItem rowSpan={1} colSpan={4} shadow="xl" rounded="md">
        <ProductRevenue
          units={dummyData.units}
          machines={dummyData.machines}
          revenue={dummyData.revenue}
        />
      </GridItem>
      <GridItem rowSpan={3} colSpan={1} bg="green" />
      <GridItem rowSpan={3} colSpan={3} bg="yellow" />
      <GridItem rowSpan={3} colSpan={4} bg="tomato" />
    </Grid>
  );
};

export default ProductDash;
