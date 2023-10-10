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

import unitDayData from "../data/unitsSoldDay.json";
import unitYearData from "../data/unitsSoldYear.json";

const UnitsSoldChart = () => {
  const [unitData, setUnitData] = useState(unitDayData);
  const dataType = useSelector(
    (state: RootState) => state.dashboardDetails.dataType
  );

  useEffect(() => {
    if (dataType === "24-hour") {
      setUnitData(unitDayData);
    } else if (dataType === "1-year") {
      setUnitData(unitYearData);
    }
  }, [dataType]);

  return (
    <>
      <Box p="10px">
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" textColor="black">
            Units Sold
          </Text>
          <Text fontSize="sm" fontWeight="semibold" textColor="gray.300">
            {dataType === "24-hour" ? `(Last 24 hour)` : `(Last 1 year)`}
          </Text>
        </Flex>
      </Box>
      <Box pt={{ base: "10px", md: "30px" }}>
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
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="units"
            fill={dataType === "24-hour" ? "#A7E510" : "#F43110"}
          />
        </BarChart>
      </Box>
    </>
  );
};

export default UnitsSoldChart;
