import React, { useState } from "react";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieGrid from "../../components/MovieGrid/MoviesGrid";
import useMoviesData from "../../Hook/useMoviesData";
import CardsShimmer from "../../components/ShimmerUI/CardsShimmer/CardsShimmer";
import HomeElement from "../../components/HomeElement/HomeElement";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [moviesData, isLoading] = useMoviesData(searchQuery); //Our Custom Hook for data fetching

  const handleSearch = (query) => {
    setSearchQuery(query.trim()); // Trimming the query to remove extra spaces
  };

  return (
    <div className={styles.moviesSection}>
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Main Heading  */}
      {moviesData && (
        <h1 className={styles.sectionTitle}>
          Search Results for {searchQuery.toUpperCase()}{" "}
        </h1>
      )}

      {/*Conditionaly Rendering Movie Grid */}
      {isLoading ? (
        <CardsShimmer />
      ) : (
        moviesData && (
          <MovieGrid
            moviesData={moviesData.Error ? moviesData.Error : moviesData.Search}
          />
        )
      )}

      <HomeElement />
    </div>
  );
};

export default Home;
