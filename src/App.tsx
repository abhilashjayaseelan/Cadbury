import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layout/RootLayout";
import Products from "./pages/Products";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Products/>}/>
    </Route>
  )
)

function App() {
  return ( 
    <RouterProvider router={router} />
  )
}

export default App;
