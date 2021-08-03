import { RatingView } from "react-simple-star-rating";
import defaultImg from "../../images/default.jpg";
import { infoRoutes } from "../../routes/infoRoutes";
import Navigation from "../navigation/Navigation";
import styles from "./MovieInfo.module.css";

const MovieInfo = ({ movieInfo, url }) => {
  return (
    <>
      <div className={styles.movie__main_wrapper}>
        <div className={styles.movie__img_wrapper}>
          {movieInfo.data.poster_path ? (
            <img
              className={styles.movie__img}
              src={`https://image.tmdb.org/t/p/w400${movieInfo.data.poster_path}`}
              alt={movieInfo.title}
            />
          ) : (
            <img
              className={styles.movie__NoImg}
              src={`${defaultImg}`}
              alt={movieInfo.title}
            />
          )}
        </div>
        <div className={styles.movie__info_wrapper}>
          <RatingView
            stars={10}
            className={styles.movie__popularity}
            ratingValue={movieInfo.data.vote_average}
          />
          <h2>
            {movieInfo.data.title} (
            {Number.parseInt(movieInfo.data.release_date)})
          </h2>

          <span className={styles.movie__secondary_titles}>Overview</span>
          <p>{movieInfo.data.overview}</p>
          <span className={styles.movie__secondary_titles}>Genres</span>
          <ul className={styles.movie__genres_list}>
            {movieInfo.data.genres.map((genre) => (
              <li className={styles.movie__genres_item} key={genre.id}>
                <span>{genre.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className={styles.movie__secondary_titles}>Additional info</p>

        <span className={styles.movie__add_info}>
          Total votes: {movieInfo.data.vote_count}
        </span>
        <span className={styles.movie__add_info}>
          Average vote rate: {movieInfo.data.vote_average}
        </span>
        <Navigation routes={infoRoutes} url={url} />
      </div>
    </>
  );
};

export default MovieInfo;
