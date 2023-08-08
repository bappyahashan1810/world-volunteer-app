import { createBrowserRouter } from "react-router-dom";
import AddEvent from "../Components/Backend/AddEvent/AddEvent/AddEvent";
import Main from "../Main/Main";
import Home from "../Components/Fontend/Home/Home/Home";

export const router = createBrowserRouter([


    {
        path: '/',

        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    },
    {
        path: '/addevent',
        element: <AddEvent></AddEvent>
    }

])