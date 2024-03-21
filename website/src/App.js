import logo from './logo.svg';
import './App.css';
import Mateja from "./pages/mateja";
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
    element: <Nikhil />,}
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App;
