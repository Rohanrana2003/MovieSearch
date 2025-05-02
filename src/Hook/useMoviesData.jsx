import { useEffect, useState } from "react";

const useMoviesData = (query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMovieData] = useState(null);

  useEffect(() => {
    if (!query) return; // if search is empty

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?s=" +
            query +
            "&apikey=" +
            import.meta.env.VITE_OMDB_API //Secured API Key
        );
        const data = await response.json();
        setMovieData(data || []); //handling case If no data is there
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return [moviesData, isLoading];
};

export default useMoviesData;
