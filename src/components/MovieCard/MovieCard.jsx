import React from "react";
import styles from "./MovieCard.module.css"; // Importing CSS module for styling
import { NavLink } from "react-router-dom"; // Importing NavLink for navigation

const MovieCard = ({ movie, handleFavoriteClick, favorites }) => {
  // Check if the movie is already in favorites
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className={styles.movieCard}>
      {/* Poster */}
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
        {/* Favorite Button */}
        <button
          className={`${styles.favoriteButton} ${
            isFavorite ? styles.active : ""
          }`}
          onClick={() => handleFavoriteClick(movie)}
        >
          {favorites.some((fav) => fav.imdbID === movie.imdbID) ? "♥" : "♡"}
        </button>
        {/* Movie Or Series badge */}
        <div className={styles.typeBadge}>{movie.Type}</div>
      </div>

      {/* Movie Info */}
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
  );
};

export default MovieCard;
