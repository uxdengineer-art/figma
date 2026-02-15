import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/services.html",
    Component: Services,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
  {
    path: "/portfolio.html",
    Component: Portfolio,
  },
  {
    path: "/portfolio/:projectSlug",
    Component: ProjectDetail,
  },
  {
    path: "/portfolio/:projectSlug/index.html",
    Component: ProjectDetail,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/contact.html",
    Component: Contact,
  },
]);