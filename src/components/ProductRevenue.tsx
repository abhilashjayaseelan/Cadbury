import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { RiShapesLine } from "react-icons/ri";
import { MdOutlineGroupWork } from "react-icons/md";
import { BsCurrencyPound } from "react-icons/bs";

interface ProductRevenue {
  units: number;
  machines: number;
  revenue: number;
}

const ProductRevenue: React.FC<ProductRevenue> = ({
  units,
  machines,
  revenue,
}) => {
  return (
    <Box as="div">
      <Grid templateColumns="repeat(3, 1fr)" gap={2} h="100px" pt="2">
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Flex padding="8px" justify="space-between">
            <Box pl='2'>
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                Units Sold Today
              </Text>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="bold"
                pt="10px"
              >
                {units}
              </Text>
            </Box>
            <Box>
              <Text fontSize="5xl" textColor="purple.500">
                <RiShapesLine />
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          borderLeft={{ md: "2px" }}
          borderRight={{ md: "2px" }}
          borderColor={{ md: "gray.300" }}
          colSpan={{ base: 3, md: 1 }}
        >
          <Flex padding="8px" justify="space-between">
            <Box pl='2'>
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                Machines Carrying Products
              </Text>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="bold"
                pt="10px"
              >
                {machines}
              </Text>
            </Box>
            <Box>
              <Text fontSize="5xl" textColor="brand.500">
                <MdOutlineGroupWork />
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Flex padding="8px" justify="space-between">
            <Box>
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                Total Revenue
              </Text>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                fontWeight="bold"
                pt="10px"
              >
                <Flex alignItems="center">
                  <BsCurrencyPound />
                  {revenue}
                </Flex>
              </Text>
            </Box>
            <Box>
              <Text fontSize="5xl" textColor="green.400">
                <BsCurrencyPound />
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductRevenue;
