import React from "react";
import MovieCard from "./MovieCard";
import Rate from "./Rate";

const MovieList = props => {
  return (
    <div className="aaa">
      {props.movies
        .filter(
          el =>
            el.name
              .toLowerCase()
              .includes(props.nameFilter.toLowerCase().trim()) &&
            el.rating >= props.minRating
        )
        .map((el, i) => (
          <div key={i}>
            {/* <MovieCard key={i} /> */}

            <img src={el.image} alt="..." className="image" />
            <h2>{el.name}</h2>
            <p>{el.date}</p>
            {/* <p>{el.rating}</p> */}
            <Rate rating={el.rating} />
          </div>
        ))}
    </div>
  );
};
export default MovieList;
