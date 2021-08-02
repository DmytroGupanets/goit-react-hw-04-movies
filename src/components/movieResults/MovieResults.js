import defaultImg from "../../images/default.jpg";
import styles from "./MovieResult.module.css";
import { RatingView } from "react-simple-star-rating";
import { Link, withRouter } from "react-router-dom";

const MovieResults = ({ results, location }) => {
  return (
    <ul className={styles.results__list}>
      {results.map((res) => (
        <li className={styles.results__item} key={res.id}>
          <Link
            className={styles.movie__link}
            to={{
              pathname: `/movie/${res.id}`,
              state: { from: location.pathname, search: location.search },
            }}
            exact="true"
          >
            <div className={styles.results__card}>
              {res.poster_path ? (
                <img
                  className={styles.results__img}
                  src={`https://image.tmdb.org/t/p/w200${res.poster_path}`}
                  alt={res.title}
                />
              ) : (
                <img
                  className={styles.results__NoImg}
                  src={`${defaultImg}`}
                  alt={res.title}
                />
              )}

              <h3 className={styles.results__title}>{res.title}</h3>
              <span className={styles.results__release_date}>
                {res.release_date}
              </span>

              <RatingView
                className={styles.results__popularity}
                ratingValue={res.vote_average / 2}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieResults);
