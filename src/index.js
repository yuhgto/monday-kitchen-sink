/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Menu from "./layouts/Menu/Menu";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import AttentionBoxLayout from "./examples/attention-box-layout/AttentionBoxLayout";
import TabLayout from "./layouts/tab-layout/TabLayout";
import DeleteItem from "./examples/DeleteItem/DeleteItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>
  },
  {
    path: "/app",
    element: <App />
  },
  {
    path: "/deleteItem",
    element: <TabLayout ExampleComponent={DeleteItem}/>
  },
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
