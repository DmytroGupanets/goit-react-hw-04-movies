import { Component } from "react";
import { RatingView } from "react-simple-star-rating";
import { fetchMovieReviews } from "../../services/movieApi";
import styles from "./MovieReviewsPage.module.css";

class MovieReviewsPage extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const response = await fetchMovieReviews(this.props.location.pathname);

    this.setState({ results: [...response] });
  }

  render() {
    const { results } = this.state;
    const shouldRender = results.length > 0;

    return (
      <ul className={styles.review__list}>
        {shouldRender ? (
          results.map((res) => (
            <li className={styles.review__item} key={res.id}>
              <span className={styles.review__name}>
                {res.author_details.username}
              </span>
              <RatingView
                stars={5}
                className={styles.review__rating}
                ratingValue={res.author_details.rating / 2}
              />
              <span className={styles.review__date}>{res.updated_at}</span>
              <p className={styles.review__content}>{res.content}</p>
            </li>
          ))
        ) : (
          <li>No reviews</li>
        )}
      </ul>
    );
  }
}

export default MovieReviewsPage;
