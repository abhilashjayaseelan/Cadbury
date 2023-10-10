import { Box, Flex, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import revenue from "../data/revenueDayData.json";

const revenueData = revenue;

const RevenueChart = () => {
  return (
    <>
      <Box p="10px">
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" textColor="black">
            Revenue
          </Text>
          <Text fontSize="sm" fontWeight="semibold" textColor="gray.300">
            (Last 24 hours)
          </Text>
        </Flex>
      </Box>
      <Box pt={{base:'10px', md: '30px'}} pl='20'>
        <BarChart
          width={900}
          height={250}
          data={revenueData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#10F46A " />
        </BarChart>
      </Box>
    </>
  );
};

export default RevenueChart;
