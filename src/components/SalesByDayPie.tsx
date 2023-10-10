import { Box, Flex, Text } from "@chakra-ui/react";
import { PieChart, Pie, Tooltip, } from "recharts";
import salesByDay from "../data/salesByDayPie.json";

//dummy data
const data01 = salesByDay;

function SalesByDayPie() {
  return (
    <>
      <Box p="10px">
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" textColor="black">
            Sales by the day
          </Text>
          <Text fontSize="sm" fontWeight="semibold" textColor="gray.300">
            (Last 24 hours)
          </Text>
        </Flex>
      </Box>
      <Box>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#1070F4"
            label
          />
          <Tooltip />
        </PieChart>
      </Box>
    </>
  );
}

export default SalesByDayPie;
