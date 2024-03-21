import logo from './logo.svg';
import './App.css';
import Mateja from "./pages/mateja";
import Rahul from "./pages/Rahul";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
function App() {
  const router = createBrowserRouter([

    // other pages....
    {
      path: "/mateja",
      element: <Mateja />,
    },
    {
      path: "/Rahul",
      element: <Rahul />,
    },
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App;
