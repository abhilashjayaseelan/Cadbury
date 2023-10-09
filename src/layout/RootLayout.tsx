import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import TopNav from "../components/TopNav";

const RootLayout = () => {
  return (
    <div>
      <Header name="John Doe"/>
      <TopNav/>
      <Outlet/>
    </div>
  )
}

export default RootLayout;
