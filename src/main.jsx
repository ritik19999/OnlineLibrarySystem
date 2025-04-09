import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error.jsx";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBooks from "./components/AddBooks.jsx";
import BookDetails from "./components/BookDetails.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/Home",
        element: <BookList />,
      },
      {
        path: "/browseBooks",
        element: <BrowseBooks />,
      },
      {
        path: "/AddBook",
        element: <AddBooks />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
