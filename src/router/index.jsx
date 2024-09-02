import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";

import Home from "../component/home";
import Category from "./category";



const router = createBrowserRouter([

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/:category",
                element: <Category />
            }
        ]
    }
])

export default router;