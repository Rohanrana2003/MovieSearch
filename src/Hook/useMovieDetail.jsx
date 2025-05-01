import React, { useEffect, useState } from "react";

const useMovieDetail = (movieId) => {
  const [moviesData, setMovieData] = useState(null);

  useEffect(() => {
    if (!movieId) return; // if no movieid

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?i=" +
            movieId +
            "&apikey=" +
            import.meta.env.VITE_OMDB_API //Secured API Key
        );
        const data = await response.json();
        setMovieData(data || []); //handling case If no data is there
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [movieId]);

  return moviesData;
};

export default useMovieDetail;
