import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layout/RootLayout";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Machines from "./pages/Machines";
import Operations from "./pages/Operations";
import Transactions from "./pages/Transactions";
import Events from "./pages/Events";
import Content from "./pages/Content";
import Jobs from "./pages/Jobs";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import Admin from "./pages/Admin";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Dashboard/>}/>
      <Route path="/markets" element={<Markets/>}/>
      <Route path="/machines" element={<Machines/>}/>
      <Route path="/operations" element={<Operations/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/transactions" element={<Transactions/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Route>
  )
)

function App() {
  return ( 
    <RouterProvider router={router} />
  )
}

export default App;
