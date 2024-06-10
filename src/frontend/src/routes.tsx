import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/book";
import ReadingList from "./pages/reading-list";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/books",
        element: <Book/>,
    },
    {
        path: "/reading-list",
        element: <ReadingList/>,
    }
])
