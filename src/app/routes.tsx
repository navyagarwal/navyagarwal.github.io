import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import { Gallery } from "./components/Gallery";
import { Blog } from "./components/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "gallery", Component: Gallery },
      { path: "blog", Component: Blog },
    ],
  },
]);
