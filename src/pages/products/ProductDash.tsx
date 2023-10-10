import { Box, Flex, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import ProductRevenue from "../../components/ProductRevenue";
import productRevenueData from "../../data/productRevenueData.json";
import SalesByDayPie from "../../components/SalesByDayPie";
import UnitsSoldChart from "../../components/UnitsSoldChart";
import RevenueChart from "../../components/RevenueChart";
import { changeData } from "../../redux/dashboardDataSlice";
import { RootState } from "../../redux/reducer";

interface revenueData {
  units: number;
  machines: number;
  revenue: number;
}

// Dummy Data
const dummyData: revenueData = productRevenueData[0];

const ProductDash = () => {
  const dispatch = useDispatch();
  const dataType = useSelector(
    (state: RootState) => state.dashboardDetails.dataType
  );

  function handleTypeChange(type: string) {
    dispatch(changeData(type));
  }

  return (
    <Grid
      h={{ md: "900px" }}
      templateRows="repeat(13, 1fr)"
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
      <GridItem rowSpan={{md: 1}} colSpan={{base:4, md: 4}}>
        <Flex as="div" mt="18px" gap={8}>
          <Text fontSize="2xl" fontWeight="bold" textColor="brand.500">
            Custom Product Insights
          </Text>
          <Box>
            <Select
              placeholder="Select option"
              iconColor="brand.500"
              onChange={() =>
                handleTypeChange(dataType === "1-year" ? "24-hour" : "1-year")
              }
            >
              <option selected value="option1">
                Last 24 hours
              </option>
              <option value="option2">Last year</option>
            </Select>
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={6}
        colSpan={{base: 4, md: 1}}
        rounded="md"
        shadow="xl"
        borderTop="4px"
        borderColor="brand.500"
      >
        <SalesByDayPie />
      </GridItem>
      <GridItem rowSpan={6} colSpan={{base: 1, md: 3}} rounded="md" shadow="xl">
        <UnitsSoldChart />
      </GridItem>
      <GridItem rowSpan={5} colSpan={4} rounded="md" shadow="xl">
        <RevenueChart />
      </GridItem>
    </Grid>
  );
};

export default ProductDash;
