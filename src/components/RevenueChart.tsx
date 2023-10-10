import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import revenueDay from "../data/revenueDayData.json";
import revenueYear from "../data/revenueYearData.json";

const RevenueChart = () => {
  const [revenueData, setRevenueData] = useState(revenueDay);
  const dataType = useSelector(
    (state: RootState) => state.dashboardDetails.dataType
  );

  useEffect(() => {
    if (dataType === "24-hour") {
      setRevenueData(revenueDay);
    } else if (dataType === "1-year") {
      setRevenueData(revenueYear);
    }
  }, [dataType]);

  return (
    <>
      <Box p="10px">
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" textColor="black">
            Revenue
          </Text>
          <Text fontSize="sm" fontWeight="semibold" textColor="gray.500">
            {dataType === "1-year" ? `(Last 1 year)` : `(Last 24 hours)`}
          </Text>
        </Flex>
      </Box>
      <Box pt={{ base: "10px", md: "30px" }} pl="20">
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
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="revenue"
            fill={dataType === "24-hour" ? "#10E5B5" : "#00cd4d"}
          />
        </BarChart>
      </Box>
    </>
  );
};

export default RevenueChart;
