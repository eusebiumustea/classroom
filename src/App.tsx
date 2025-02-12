import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthGuard } from "./containers";
import { Home, Login, Register } from "./pages";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    ),
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
