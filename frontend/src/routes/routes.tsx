import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowSummary from "../pages/BorrowSummary";
import EditBook from "../pages/EditBook";
import BookDetails from "../pages/BookDetails";
import BorrowBook from "../pages/BorrowBook";

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
            path: "/books/:id",
            element:<BookDetails></BookDetails>
        },
        {
            path: "/edit-book/:id",
            element:<EditBook></EditBook>
        },
        {
            path: "/borrow/:bookId",
            element:<BorrowBook></BorrowBook>
        },
        {
            path: "/borrow-summary",
            element:<BorrowSummary></BorrowSummary>
        }, 
    ]
  },
]);

export default router;