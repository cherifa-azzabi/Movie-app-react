import React from "react";
import { moviesData } from "./components/data";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import AddMovie from "./components/addMovie";

import "./App.css";
class App extends React.Component {
  state = {
    moviesData: moviesData,
    nameFilter: "",
    minRating: 1
  };
  AddMovie = newMovie => {
    this.setState({
      moviesData: [...this.state.moviesData, newMovie]
    });
  };

  SearchMovie = x => {
    this.setState({
      nameFilter: x
    });
  };

  searchByRating = x => {
    this.setState({
      minRating: x
    });
  };

  render() {
    return (
      <div className="App">
        <Search
          SearchMovie={this.SearchMovie}
          searchByRating={this.searchByRating}
        />
        <MovieList
          movies={this.state.moviesData}
          nameFilter={this.state.nameFilter}
          minRating={this.state.minRating}
        />

        <AddMovie AddMovie={this.AddMovie} />
      </div>
    );
  }
}

export default App;
