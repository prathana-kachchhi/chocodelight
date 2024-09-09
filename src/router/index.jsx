import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";

import Home from "../component/home";
import Category from "./category";
import DelayedSuspense from "../common/loader/DelayedSuspense/DelayedSuspense";



const router = createBrowserRouter([

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element:( 
                <DelayedSuspense>
                <Home />
                    </DelayedSuspense>
                    ),

            },
            {
                path: "/:category",
                element: <Category />
            }
        ]
    }
])

export default router;