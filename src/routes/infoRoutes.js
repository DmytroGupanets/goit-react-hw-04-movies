import { lazy } from "react";

export const infoRoutes = [
  {
    name: "Cast",
    path: "/cast",
    component: lazy(() =>
      import("../pages/MovieCastPage" /* webpackChunkName: "MovieCastPage" */)
    ),
    exact: false,
  },
  {
    name: "Reviews",
    path: "/reviews",
    component: lazy(() =>
      import(
        "../pages/MoviesReviewsPage" /* webpackChunkName: "MoviesReviewsPage" */
      )
    ),
    exact: false,
  },
];
