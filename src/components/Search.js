import React, { Component } from "react";
import Rate from "./Rate";

class Search extends Component {
  state = {
    inputValue: "",
    ratingValue: 1
  };
  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="type movie name to search"
          onChange={e => {
            this.setState({
              inputValue: e.target.value
            });
            this.props.SearchMovie(e.target.value);
          }}
        />
        <Rate
          starIndex={x =>
            this.setState(
              {
                ratingValue: x
              },
              () => this.props.searchByRating(this.state.ratingValue)
            )
          }
          rating={this.state.ratingValue}
        />
      </div>
    );
  }
}
export default Search;
