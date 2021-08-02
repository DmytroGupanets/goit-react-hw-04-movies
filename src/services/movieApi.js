import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "885a95a06ad5b91e64cfef2cf355a22e";

export const fetchTrending = async () => {
  try {
    const response = await axios
      .get(`/trending/movie/day?api_key=${API_KEY}`)
      .then((res) => res.data.results);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearch = async (searchQuery) => {
  try {
    const response = await axios
      .get(
        `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&language=en-US`
      )
      .then((res) => res.data.results);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${id}?api_key=${API_KEY}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCredits = async (id) => {
  try {
    const response = await axios
      .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.data.cast);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async (id) => {
  try {
    const response = await axios
      .get(`${id}?api_key=${API_KEY}&page=1&language=en-US`)
      .then((res) => res.data.results);

    return response;
  } catch (error) {
    console.log(error);
  }
};
