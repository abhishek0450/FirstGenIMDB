import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing BrowserRouter,Routes,Route from react-router-dom
//BrowserRouter is the parent component that wraps around the entire application
//Routes is used to define the different routes in the application
//Route is used to define the individual route

function App() {
  let [AddWatchlist, setAddWatchlist] = useState([]);
  function handleAddToWatchlist(movieObj) {
    setAddWatchlist([...AddWatchlist, movieObj]);
    console.log(setAddWatchlist);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies handleAddToWatchlist={handleAddToWatchlist} />
              </>
            }
          />

          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
