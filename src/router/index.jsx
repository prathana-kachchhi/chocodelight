import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../component/home";
import Category from "./category";
import DelayedSuspense from "../common/loader/DelayedSuspense/DelayedSuspense";
import ProductInfo from "../pagesofmenu/productInfo";

const router = createBrowserRouter([

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: (
                    <DelayedSuspense>
                        <Home />
                    </DelayedSuspense>
                ),

            },
            {
                path: "/:category",
                element: <Category />
            },
            {
                path:"/productinfo",
                element: <ProductInfo />
            }
        ]
    }
])

export default router;