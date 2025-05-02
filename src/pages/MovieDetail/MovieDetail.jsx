import React from "react";
import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import DetailShimmer from "../../components/ShimmerUI/DetailShimmer/DetailShimmer";
import useMovieDetail from "../../Hook/useMovieDetail";

const MovieDetail = () => {
  const { movieId } = useParams(); // fetching id Using params
  const movie = useMovieDetail(movieId); // custom hook to fetch movie details

  if (!movie)
    return (
      <div className={styles.loading}>
        {/* Fallback UI */}
        <DetailShimmer />
      </div>
    );

  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        {/* Poster */}
        <div className={styles.posterSection}>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_1280.jpg"
            }
            alt={movie.Title || "Movie Poster"}
            className={styles.poster}
          />
        </div>

        {/* Details */}
        <div className={styles.detailsSection}>
          {/* Title */}
          <h1 className={styles.title}>
            {movie.Title} <span className={styles.year}>({movie.Year})</span>
          </h1>

          {/* More Details */}
          <div className={styles.moreData}>
            {movie.Rated && <span className={styles.rated}>{movie.Rated}</span>}
            {movie.Runtime && <span>{movie.Runtime}</span>}
            {movie.Genre && <span>{movie.Genre}</span>}
          </div>

          {/* Key Info */}
          <div className={styles.infoGrid}>
            {movie.Director && (
              <div className={styles.infoItem}>
                <h3>Director</h3>
                <p>{movie.Director}</p>
              </div>
            )}

            {movie.Writer && (
              <div className={styles.infoItem}>
                <h3>Writer</h3>
                <p>{movie.Writer}</p>
              </div>
            )}

            {movie.Actors && (
              <div className={styles.infoItem}>
                <h3>Cast</h3>
                <p>{movie.Actors}</p>
              </div>
            )}
          </div>

          {/* Plot */}
          {movie.Plot && (
            <div className={styles.plot}>
              <h2>Storyline</h2>
              <p>{movie.Plot}</p>
            </div>
          )}

          {/* Ratings */}
          <div className={styles.ratings}>
            <h2>Ratings</h2>
            <div className={styles.ratingBars}>
              {movie.Ratings?.map((rating, index) => (
                <div key={index} className={styles.ratingItem}>
                  <span className={styles.ratingSource}>{rating.Source}</span>
                  <span className={styles.ratingValue}>{rating.Value}</span>
                </div>
              ))}
              {movie.imdbRating && (
                <div className={styles.ratingItem}>
                  <span className={styles.ratingSource}>IMDb Rating</span>
                  <span className={styles.ratingValue}>
                    {movie.imdbRating}/10 ({movie.imdbVotes} votes)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
