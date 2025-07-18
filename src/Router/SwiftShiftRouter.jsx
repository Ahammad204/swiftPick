import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import Home from "../Pages/Home/Home/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
]);