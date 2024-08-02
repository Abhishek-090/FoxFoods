import  { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "../src/components/AboutUs";
import ContactUs from "../src/components/ContactUs";
import Menu from "../src/components/Menu";
import Error from "../src/components/Error";
import App from "./App";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
