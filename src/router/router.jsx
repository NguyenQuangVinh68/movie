import { createBrowserRouter, Navigate } from "react-router-dom";

import MasterLayoutAdmin from "../layouts/admin/MasterLayoutAdmin";
import Dashboard from "../views/admin/Dashboard";
import User from "../views/admin/User";
import Category from "../views/admin/Category";
import NotFound from "../views/error/NotFound";
import City from "../views/admin/City";
import MasterLayoutClient from "../layouts/client/MasterLayoutClient";

import LayoutAuthen from "../layouts/LayoutAuthen";
import Login from "../components/fontend/auth/Login";
import Register from "../components/fontend/auth/Register";

const router = createBrowserRouter([
  // admin
  {
    path: "/admin",
    element: <MasterLayoutAdmin />,
    children: [
      { path: "/admin", element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "user", element: <User /> },
      { path: "category", element: <Category /> },
      { path: "city", element: <City /> },
    ],
  },

  //   client
  {
    path: "/",
    element: <MasterLayoutClient />,
  },

  {
    path: "/",
    element: <LayoutAuthen />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
