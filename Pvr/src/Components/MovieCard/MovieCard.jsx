import React from 'react';
import './MovieCard.css'

const MovieCard = ({movies}) => {
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <div className="grid-items" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} className="poster" />
          <p className="movie-title">{movie.Title}</p>
          <span className="year-badge">{movie.Year}</span>
        </div>
      ))}
    </section>
  )
}

export default MovieCard
