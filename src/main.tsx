import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./app/root";
import Layout from "./app/layout";
import VirtualFieldProbing from "./app/technology/virtual-field-probing";
import SoilMoister from "./app/technology/soil-moisture";
import FarmGuru from "./app/product/farmguru";
import About from "./app/company/about";
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
          { path: "soil-moister", element: <SoilMoister /> },
        ],
      },
      {
        path: "products",
        children: [{ path: "farmguru", element: <FarmGuru /> }],
      },
      {
        path: "company",
        children: [{ path: "about", element: <About /> }],
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
