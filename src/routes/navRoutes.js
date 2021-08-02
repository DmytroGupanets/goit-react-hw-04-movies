import { lazy } from "react";

export const navRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage" */)
    ),
    exact: true,
  },
  {
    name: "Movie info page",
    path: "/movie/:id",
    component: lazy(() =>
      import("../pages/MovieInfoPage" /* webpackChunkName: "MovieInfoPage" */)
    ),
    exact: false,
  },
  {
    name: "Movie",
    path: "/movie",
    component: lazy(() =>
      import("../pages/MoviePage" /* webpackChunkName: "MoviePage" */)
    ),
    exact: false,
  },
];
