import { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { fetchSearch } from "../services/movieApi";
import MovieResults from "../components/movieResults/MovieResults";
import MovieSearchForm from "../components/movieSearchForm/MovieSearchForm";

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
      <div className="movie_page__container">
        <MovieSearchForm
          value={this.state.searchQuery}
          onChange={this.onHandleChange}
          onSubmit={this.onFormSubmit}
        />
        {this.state.results.length > 0 && (
          <MovieResults results={this.state.results} />
        )}
      </div>
    );
  }
}

export default withRouter(MoviePage);
