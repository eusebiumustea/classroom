import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthGuard } from "./containers";
import { ClassroomPage, Home, Login, Register } from "./pages";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthGuard>
          <Home />
        </AuthGuard>
      ),
      children: [{ path: "/classroom/:id/:type", element: <ClassroomPage /> }],
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
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={appRouter} />;
    </>
  );
}

export default App;
