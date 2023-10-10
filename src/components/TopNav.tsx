import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import {SiMarketo} from "react-icons/si";
import {BiMobile} from "react-icons/bi";
import {MdOutlineGroupWork, MdWorkOutline} from "react-icons/md";
import {RiShapesLine} from "react-icons/ri";
import {FaListUl} from "react-icons/fa6";
import {AiOutlineBell} from "react-icons/ai";
import {BsCollectionPlay, BsCurrencyPound, BsFillBarChartLineFill} from "react-icons/bs";
import {MdOutlineReportProblem, MdOutlineAdminPanelSettings} from "react-icons/md";


const tabs = [
  { label: "Dashboard", to: "/", icon: <BsFillBarChartLineFill/>},
  { label: "Markets", to: "/markets", icon: <SiMarketo/> },
  { label: "Machines", to: "/machines", icon: <BiMobile/> },
  { label: "Operations", to: "/operations", icon: <MdOutlineGroupWork/> },
  { label: "Products", to: "/products", icon: <RiShapesLine/> },
  { label: "Transactions", to: "/transactions", icon: <FaListUl/> },
  { label: "Events", to: "/events", icon: <AiOutlineBell/> },
  { label: "Content", to: "/content", icon: <BsCollectionPlay/> },
  { label: "Jobs", to: "/jobs", icon: <MdWorkOutline/> },
  { label: "Billing", to: "/billing", icon: <BsCurrencyPound/> },
  { label: "Reports", to: "/reports", icon: <MdOutlineReportProblem/> },
  { label: "Admin", to: "/admin", icon: <MdOutlineAdminPanelSettings/> },
];

const TopNav = () => {
  return (
    <Flex as="nav" p="10px" overflowX="auto" shadow='md'>
      <Tabs
        size={{ base: "sm", md: "md" }}
        variant="soft-rounded"
      >
        <TabList>
          {tabs.map((tab, index) => (
            <Tab w={{ md: "120px" }} key={index}>
              <NavLink to={tab?.to}>
                <Box display="flex" alignItems="center">
                  <Box mr="2" color="brand.500">{tab?.icon}</Box>
                  <Text fontSize='sm'>{tab?.label}</Text>  
                </Box>
              </NavLink>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default TopNav;
