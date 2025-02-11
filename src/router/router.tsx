import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Register } from "../pages";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
