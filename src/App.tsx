import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthGuard } from "./containers";
import { Home, Login, Register } from "./pages";
import { ToastContainer } from "react-toastify";

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
  return (
    <> 
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={appRouter} />;
     
    </>
  );
}

export default App;
