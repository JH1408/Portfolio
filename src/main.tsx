import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Privacy from "./components/Privacy.tsx";
import Home from "./components/Home.tsx";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Toaster
        toastOptions={{
          style: {
            maxWidth: 400,
          },
        }}
      />
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
