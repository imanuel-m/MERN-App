import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UpdateTask from "./components/UpdateTask.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/update", element: <UpdateTask /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
