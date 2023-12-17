import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return ( 
        <div className="movie-list"style={{display:'flex', marginLeft:'2rem'}}>
            {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
        </div>
     );
}
 
export default MovieList;