// import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favorites from "./pages/favorites/favorites";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/detail/:movieId" element={<MovieDetail />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
