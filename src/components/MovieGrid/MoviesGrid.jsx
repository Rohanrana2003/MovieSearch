import React, { useState, useEffect } from "react";
import styles from "./MoviesGrid.module.css";
import { NavLink } from "react-router-dom";

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
          <div key={movie.imdbID} className={styles.movieCard}>
            <div
              className={styles.posterContainer}
              style={{
                backgroundImage: `url(${
                  movie.Poster !== "N/A" //Checking the movie poster is there or not
                    ? movie.Poster
                    : "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_1280.jpg"
                })`,
              }}
            >
              <button
                className={`${styles.favoriteButton} ${
                  favorites.some((fav) => fav.imdbID === movie.imdbID)
                    ? styles.active
                    : ""
                }`}
                onClick={() => handleFavoriteClick(movie)}
              >
                {favorites.some((fav) => fav.imdbID === movie.imdbID)
                  ? "♥"
                  : "♡"}
              </button>
              <div className={styles.typeBadge}>{movie.Type}</div>
            </div>

            <div className={styles.movieInfo}>
              <h3 className={styles.movieTitle}>{movie.Title}</h3>
              <div className={styles.movieDetails}>
                <span className={styles.year}>{movie.Year}</span>
                <NavLink to={`/detail/${movie.imdbID}`}>
                  <span className={styles.moreInfo}>More Info </span>
                </NavLink>
              </div>
            </div>
          </div>
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
