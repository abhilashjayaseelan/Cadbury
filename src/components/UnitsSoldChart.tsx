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
import unitDayData from "../data/unitsSoldDay.json"


const unitData = unitDayData;

const UnitsSoldChart = () => {
  return (
    <>
      <Box p="10px">
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" textColor="black">
            Units Sold
          </Text>
          <Text fontSize="sm" fontWeight="semibold" textColor="gray.300">
            (Last 24 hours)
          </Text>
        </Flex>
      </Box>
      <Box pt={{base:'10px', md: '30px'}}>
        <BarChart
          width={750}
          height={300}
          data={unitData}
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
          <Bar dataKey="units" fill="#1070F4" />
        </BarChart>
      </Box>
    </>
  );
};

export default UnitsSoldChart;
