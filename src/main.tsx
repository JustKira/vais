import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./app/root";
import Layout from "./app/layout";
import VirtualFieldProbing from "./app/technology/virtual-field-probing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: "technology",
        children: [
          { path: "virtual-field-probing", element: <VirtualFieldProbing /> },
        ],
      },

      { path: "news", element: <></> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
