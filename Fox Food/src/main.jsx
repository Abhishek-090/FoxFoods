import  { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Body from "./components/Body";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
