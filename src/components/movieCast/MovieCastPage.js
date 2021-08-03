import { Component } from "react";
import { fetchMovieCredits } from "../../services/movieApi";
import defaultImg from "../../images/default.jpg";
import { v4 as uuidv4 } from "uuid";
import styles from "./MovieCastPage.module.css";
import { withRouter } from "react-router-dom";

class MovieCastPage extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const response = await fetchMovieCredits(this.props.match.params.id);

    this.setState({ actors: [...response] });
  }

  render() {
    const { actors } = this.state;
    console.log(this.props.state);

    return (
      <ul className={styles.cast__list}>
        {actors.map((actor) => (
          <li className={styles.cast__item} key={uuidv4()}>
            {actor.profile_path ? (
              <img
                className={styles.cast__Img}
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img
                className={styles.cast__defaultImg}
                src={defaultImg}
                alt={actor.name}
              />
            )}

            <span className={styles.cast__name}>{actor.name}</span>

            <p>
              as <span>{actor.character}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(MovieCastPage);
