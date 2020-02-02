import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false})     
  }

  componentDidMount() {
    console.log("component did mount");
    this.getMovies();
  }

  componentDidUpdate() {
    console.log("i just update");
  }

  render() {
    console.log("component rendering");
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => {
          return (<Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>)
        })}
      </div>
    )
  }
}

export default App;
