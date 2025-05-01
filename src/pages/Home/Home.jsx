import React, { useState } from "react";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieGrid from "../../components/MovieGrid/MoviesGrid";
import ShimmerUI from "../../components/ShimmerUI/ShimmerUI";
import useMoviesData from "../../CustomHook/useMoviesData";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [moviesData, isLoading] = useMoviesData(searchQuery); //Our Custom Hook for data fetching

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.moviesSection}>
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Main Heading  */}
      {searchQuery && (
        <h1 className={styles.sectionTitle}>
          Search Results for {searchQuery.toUpperCase()}{" "}
        </h1>
      )}

      {/*Conditionaly Rendering Movie Grid */}
      {isLoading ? (
        <ShimmerUI />
      ) : (
        moviesData && (
          <MovieGrid
            moviesData={moviesData.Error ? moviesData.Error : moviesData.Search}
          />
        )
      )}
    </div>
  );
};

export default Home;
