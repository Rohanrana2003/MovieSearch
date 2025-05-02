import React, { useState, useEffect } from "react";
import styles from "./MoviesGrid.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesGrid = ({ moviesData }) => {
  // Initialize state with favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteClick = (movie) => {
    setFavorites(
      (prev) =>
        prev.some((item) => item.imdbID === movie.imdbID) // Checking it already exist or not
          ? prev.filter((item) => item.imdbID !== movie.imdbID) // Removing from favorites
          : [...prev, movie] // Adding into favorites
    );
  };

  return (
    <div className={styles.moviesGrid}>
      {Array.isArray(moviesData) ? (
        moviesData.map((movie) => (
          // Movie Card
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            handleFavoriteClick={handleFavoriteClick}
            favorites={favorites}
          />
        ))
      ) : (
        <div className={styles.sectionTitle}>
          {moviesData || <h1>No Movies Found</h1>}
        </div>
      )}
    </div>
  );
};

export default MoviesGrid;
