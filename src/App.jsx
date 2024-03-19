import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing BrowserRouter,Routes,Route from react-router-dom
//BrowserRouter is the parent component that wraps around the entire application
//Routes is used to define the different routes in the application
//Route is used to define the individual route

function App() {
  let [addwatchlist, setAddWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...addwatchlist, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setAddWatchlist(newWatchlist);
    console.log(newWatchlist);
  };
  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = addwatchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setAddWatchlist(filteredWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist);
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
            element={<Watchlist addwatchlist={addwatchlist} setAddWatchlist={setAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
