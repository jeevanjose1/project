import { createBrowserRouter } from "react-router-dom";
import Index from "../layout/header/Index";
import Main from "../pages/main/Main";
import Register from "../pages/register/Register";

export default  createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/",
          element: <Main />,
          
        },
        {
            path: "/register",
            element: <Register />,
            
          },
      ],
    },
  ]);


