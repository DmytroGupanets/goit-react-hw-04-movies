import { Component } from "react";
import { withRouter } from "react-router-dom";
import MovieResults from "../components/movieResults/MovieResults";
import { fetchSearch } from "../services/movieApi";
import styles from "./MoviePage.module.css";
import queryString from "query-string";

class MoviePage extends Component {
  state = {
    searchQuery: "",
    results: [],
  };

  async componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (queryParams?.query) {
      const response = await fetchSearch(queryParams.query);
      this.setState({ results: [...response] });
    }
  }

  onHandleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchSearch(this.state.searchQuery);
    this.setState({ results: [...response] });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.searchQuery}`,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.search__form} onSubmit={this.onFormSubmit}>
          <input
            className={styles.search__input}
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.onHandleChange}
          />

          <button className={styles.search__button} type="submit">
            Search
          </button>
        </form>

        {this.state.results.length > 0 && (
          <MovieResults results={this.state.results} />
        )}
      </div>
    );
  }
}

export default withRouter(MoviePage);
