import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "../src/components/AboutUs";
import ContactUs from "../src/components/ContactUs";
import Menu from "../src/components/Menu";
import Error from "../src/components/Error";
import Body from "../src/components/Body";
import App from "../src/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
