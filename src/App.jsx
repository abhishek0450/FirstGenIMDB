

import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import "./css/main.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [addwatchlist, setAddWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...addwatchlist, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setAddWatchlist(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = addwatchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setAddWatchlist(filteredWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setAddWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  addwatchlist={addwatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<Watchlist addwatchlist={addwatchlist} setAddWatchlist={setAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}
          />
          <Route
            path="/tvshows"
            element={<TvShows addwatchlist={addwatchlist} setAddWatchlist={setAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}
          />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;