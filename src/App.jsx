import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, FourOfFour, Play } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <FourOfFour></FourOfFour>,
  },
  {
    path: "/play",
    element: <Play></Play>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
