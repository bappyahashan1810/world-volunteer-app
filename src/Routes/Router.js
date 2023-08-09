import { createBrowserRouter } from "react-router-dom";
import AddEvent from "../Components/Backend/AddEvent/AddEvent/AddEvent";
import Main from "../Main/Main";
import Home from "../Components/Fontend/Home/Home/Home";
import Register from "../Components/Fontend/Register/Register";
import Login from "../Components/Shared/Login/Login";
import SignIn from "../Components/Shared/SignIn/SignIn";
import MyEvent from "../Components/Fontend/MyEvent/MyEvent";

export const router = createBrowserRouter([


    {
        path: '/',

        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register/:id',
                element: <Register></Register>,
                loader: ({ params }) => fetch(`http://localhost:5000/events/${params.id}`)
            },
            {
                path: '/myevent',
                element: <MyEvent></MyEvent>
            }


        ]
    },
    {
        path: '/addevent',
        element: <AddEvent></AddEvent>
    },


])