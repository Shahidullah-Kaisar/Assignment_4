import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowSummary from "../pages/BorrowSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element:<AllBooks></AllBooks>
        },
        {
            path: "/books",
            element:<AllBooks></AllBooks>
        },
        {
            path: "/create-book",
            element:<AddBook></AddBook>
        },
        {
            path: "/borrow-summary",
            element:<BorrowSummary></BorrowSummary>
        }
    ]
  },
]);

export default router;