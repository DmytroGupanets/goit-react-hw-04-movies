import { Component } from "react";
import { fetchTrending } from "../services/movieApi";
import MovieResults from "../components/movieResults/MovieResults";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    trends: [],
  };

  async componentDidMount() {
    const response = await fetchTrending();

    this.setState({ trends: [...response] });
  }

  render() {
    return (
      <main className={styles.container}>
        {this.state.trends.length > 0 && (
          <MovieResults results={this.state.trends} />
        )}
      </main>
    );
  }
}

export default HomePage;
