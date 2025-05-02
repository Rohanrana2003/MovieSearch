import React, { useState } from "react";
import styles from "./favorites.module.css";
import MoviesGrid from "../../components/MovieGrid/MoviesGrid";

const Favorites = () => {
  // Fetching the favorite movies from local storage
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    if (typeof window !== "undefined") {
      const savedfavorites = localStorage.getItem("favorites");
      return savedfavorites ? JSON.parse(savedfavorites) : null;
    }
    return [];
  });

  // Removing all favorite movies from local storage and page
  const removeAll = () => {
    setFavoriteMovies(null);
    localStorage.clear();
  };

  return (
    <div className={styles.mainContainer}>
      {/* Checking if there is array with alteast one item */}
      {Array.isArray(favoriteMovies) && favoriteMovies.length > 0 ? (
        <div>
          <h1 className={styles.sectionTitle}>My favorites</h1>{" "}
          <button className={styles.removeButton} onClick={() => removeAll()}>
            Remove All
          </button>
          <MoviesGrid moviesData={favoriteMovies} />
        </div>
      ) : (
        <h1 className={styles.defaultHeading}> No favorites to show </h1>
      )}
    </div>
  );
};

export default Favorites;
