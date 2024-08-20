import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Signup from "../component/form/signup";
import Home from "../component/home";

const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element:<Home />
            }
        ]
    }
])

export default router ;