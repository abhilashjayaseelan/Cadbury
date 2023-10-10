import { Box, Flex, Text } from "@chakra-ui/react";
import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

import salesByDay from "../data/salesByDayPie.json";
import salesByYear from "../data/salesByYear.json";

function SalesByDayPie() {
  const [units, setUnits] = useState(salesByDay);
  const dataType = useSelector(
    (state: RootState) => state.dashboardDetails.dataType
  );

  useEffect(() => {
    if (dataType === "24-hour") {
      setUnits(salesByDay);
    } else if (dataType === "1-year") {
      setUnits(salesByYear);
    }
  }, [dataType]);

  return (
    <>
      <Box p="10px">
        <Flex>
          <Text fontSize="sm" fontWeight="semibold" textColor="black">
            Sales by the day
          </Text>
          <Text fontSize="sm" fontWeight="semibold" textColor="gray.500">
          {dataType === "1-year" ? `(Last 1 year)` : `(Last 24 hours)`}
          </Text>
        </Flex>
      </Box>
      <Box>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={units}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={dataType === "24-hour" ? "#4d92ff" : "#1070F4"}
          />
          <Tooltip />
        </PieChart>
      </Box>
    </>
  );
}

export default SalesByDayPie;
