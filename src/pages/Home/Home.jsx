import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [searchValue, setSearchValue] = useState(null);

  const handleSearch = (query) => {
    // console.log("Search query:", query);
    setSearchValue(query);

    console.log(searchValue);
  };

  const getMovies = async () => {
    const response = await fetch("");
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Home;
