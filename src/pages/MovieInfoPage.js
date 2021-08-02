import { Component, Suspense } from "react";
import { RatingView } from "react-simple-star-rating";
import { fetchMovieDetails } from "../services/movieApi";
import styles from "./MovieInfoPage.module.css";
import defaultImg from "../images/default.jpg";
import { Switch, withRouter } from "react-router-dom";

import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
import { infoRoutes } from "../routes/infoRoutes";
import Navigation from "../components/navigation/Navigation";

class MovieInfoPage extends Component {
  state = {
    movieInfo: null,
  };

  async componentDidMount() {
    const response = await fetchMovieDetails(this.props.location.pathname);
    this.setState({ movieInfo: response });
  }

  handleReturn = () => {
    this.props.history.push(
      this.props.location?.state?.from + this.props.location?.state?.search ||
        "/"
    );
  };

  render() {
    const { movieInfo } = this.state;

    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.return_button}
          onClick={this.handleReturn}
        >
          Go back
        </button>
        {movieInfo ? (
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
              <Navigation routes={infoRoutes} url={this.props.match.url} />
            </div>
          </>
        ) : (
          <h2 className={styles.error_msg}>Error! No any info found.</h2>
        )}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <ContentSwitcher routes={infoRoutes} path={this.props.match.path} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(MovieInfoPage);
