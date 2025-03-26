import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "./ui/BackButton";
import MenuButton from "./ui/MenuButton";
import movieData from "../data/movieData";
import "../App.css";

const MovieDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movieData.find((m) => String(m.id) === id);
    if (!foundMovie) {
      navigate("/movies"); // Redirect if movie not found
    } else {
      setMovie(foundMovie);
    }
  }, [id, navigate]);

  const handleProceed = () => {
    navigate(`/movie/${id}/seats`, { state: { movieId: movie.id } });
  };

  if (!movie) {
    return (
      <div className="loading-container">
        <p>Loading movie details...</p>
      </div>
    );
  }

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Column: Movie Poster */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={movie.posterUrl || "/images/default-movie.jpg"}
            alt={movie.title}
          />
        </motion.div>

        {/* Right Column: Movie Details */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{movie.title}</h2>
          {movie.subtitle && <h3>{movie.subtitle}</h3>}
          <p>{movie.fullDescription}</p>
          <div className="movie-meta">
            <p><strong>Runtime:</strong> {movie.runtime}</p>
            <p><strong>Actors:</strong> {movie.actors}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Producer:</strong> {movie.producer}</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleProceed}
            className="contact-button"
          >
            Proceed to Book Tickets
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MovieDetailsScreen;
