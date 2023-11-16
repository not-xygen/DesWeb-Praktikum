import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import RootLayout from "./layout/root-layout";
import ErrorPage from "./pages/error";
import Books from "./pages/books.jsx";
import BookForm from "./pages/form.jsx";
import DetailBook from "./pages/detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "books",
        children: [
          { path: "", element: <Books /> },
          {
            path: ":id",
            element: <DetailBook />,
          },
          {
            path: "create",
            element: <BookForm />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
