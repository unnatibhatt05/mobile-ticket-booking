import React from "react";
import { Link } from "react-router-dom";
import movieData from "../data/movieData"; // Import movie data
import Navbar from "../components/Navbar"; // Import Navbar
import "./Movies.css"; // Ensure proper styling

const Movies = () => {
  // Select the top 10 trending movies from movieData
  const trendingMovies = movieData.slice(0, 10);

  // Function to truncate text to the first five words
  const truncateToFiveWords = (text) => {
    const words = text.split(' ');
    return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : text;
  };

  return (
    <>
      <Navbar /> {/* Navbar on top */}
      <div className="movies-container">
        <h1 className="movies-title">🎬 Now Showing</h1>
        <div className="movies-grid">
          {trendingMovies.length > 0 ? (
            trendingMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`} className="movie-link">
                  <img
                    src={movie.posterUrl || "/images/default-movie.jpg"} // Fallback image
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <h2 className="movie-name">{movie.title}</h2>
                  <p className="movie-description">
                    {truncateToFiveWords(movie.shortDescription)}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p className="no-movies">No movies available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
