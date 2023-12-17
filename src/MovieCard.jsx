import React from "react";

const MovieCard = ({movie}) => {
const movieStyle={
  marginTop:"3rem",
  display:"block",
};
  const imgStyle = {
    margin:'.3rem',
    marginTop:"18rem",
    display:"block",
    width:'23rem',
    marginLeft:'1rem',
  };
  const descStyle={
    fontSize:"17px",
    display:"block",
    fontWeight:"400"
  };
    return ( 
        <div className="movie-card" style={movieStyle}>
       <a href=""><img src={movie.posterURL} alt={movie.title} style={imgStyle} id="image"/></a> 
        <h3>{movie.title}</h3>
        <p style={descStyle}>{movie.description}</p>
        <p id="note"><span>Note:</span>{movie.note}</p>
      </div>
    );
}
 
export default MovieCard;