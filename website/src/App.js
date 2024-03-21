import logo from './logo.svg';
import './App.css';
import Mateja from "./pages/mateja";
import TuanHua from "./pages/tuanhua";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
function App() {
  const router = createBrowserRouter([

    // other pages....
    {
      path: "/mateja",
      element: <Mateja />,
    },
    {
      path: "/tuanhua",
      element: <TuanHua />,
    },
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App;
