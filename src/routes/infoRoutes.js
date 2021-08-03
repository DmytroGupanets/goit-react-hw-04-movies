import { lazy } from "react";

export const infoRoutes = [
  {
    name: "Cast",
    path: "/cast",
    component: lazy(() =>
      import(
        "../components/movieCast/MovieCastPage" /* webpackChunkName: "MovieCastPage" */
      )
    ),
    exact: false,
  },
  {
    name: "Reviews",
    path: "/reviews",
    component: lazy(() =>
      import(
        "../components/movieReviews/MovieReviewsPage" /* webpackChunkName: "MoviesReviewsPage" */
      )
    ),
    exact: false,
  },
];
