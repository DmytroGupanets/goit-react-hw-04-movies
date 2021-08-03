import { Component, Suspense } from "react";
import { Switch, withRouter } from "react-router-dom";
import { fetchMovieDetails } from "../services/movieApi";
import { infoRoutes } from "../routes/infoRoutes";
import GoBackButton from "../components/goBackButton/GoBackButton";
import MovieInfo from "../components/movieInfo/MovieInfo";
import ContentSwitcher from "../components/contentSwitcher/ContentSwitcher";
import styles from "../components/container/Container.module.css";

class MovieInfoPage extends Component {
  state = {
    movieInfo: null,
  };

  async componentDidMount() {
    const response = await fetchMovieDetails(this.props.location.pathname);
    this.setState({ movieInfo: response });

    this.props.match.params = this.props.history.state;
    console.log(this.props.params);
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
        <GoBackButton handleReturn={this.handleReturn} />
        {movieInfo ? (
          <MovieInfo
            movieInfo={movieInfo}
            url={this.props.match.url}
            savedResult={this.props.history.location.state}
          />
        ) : (
          <h2>Error! No any info found.</h2>
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
