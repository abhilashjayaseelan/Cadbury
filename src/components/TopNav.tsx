import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Dashboard", to: "/" },
  { label: "Markets", to: "/markets" },
  { label: "Machines", to: "/machines" },
  { label: "Operations", to: "/operations" },
  { label: "Products", to: "/products" },
  { label: "Transactions", to: "/transactions" },
  { label: "Events", to: "/events" },
  { label: "Content", to: "/content" },
  { label: "Jobs", to: "/jobs" },
  { label: "Billing", to: "/billing" },
  { label: "Reports", to: "/reports" },
  { label: "Admin", to: "/admin" },
];

const TopNav = () => {
  return (
    <Flex as="nav" p="10px" overflowX="auto">
      <Tabs
        size={{ base: "sm", md: "md" }}
        variant="soft-rounded"
        colorScheme="blue"
      >
        <TabList>
          {tabs.map((tab, index) => (
            <Tab w={{ md: "120px" }} key={index}>
              <NavLink to={tab?.to}>{tab?.label}</NavLink>
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default TopNav;
