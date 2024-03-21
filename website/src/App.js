import logo from './logo.svg';
import './App.css';
import Mateja from "./pages/mateja";

import Suhas from "./pages/suhas";

import TuanHua from "./pages/tuanhua";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Nikhil from './pages/nikhil';
function App() {
  const router = createBrowserRouter([

    // other pages....
    {
      path: "/mateja",
      element: <Mateja />,
    },

    { path: "/nikhil",
    element: <Nikhil />,},

    {

      path: "/suhas",
      element: <Suhas />,
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
