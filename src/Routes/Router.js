import { createBrowserRouter } from "react-router-dom";
import AddEvent from "../Components/Backend/AddEvent/AddEvent/AddEvent";

export const router = createBrowserRouter([
    {
        path: '/addevent',
        element: <AddEvent></AddEvent>
    }
])