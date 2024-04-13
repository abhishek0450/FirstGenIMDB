import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";
import "./css/main.css";
import { useState, useEffect } from "react";
import axios from "axios";

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

  let [movie, setMovie] = useState(null);
  

  const API_KEY = "789d07148ac9596cfc9028dc63928cec";
  const MOVIE_ID = "1011985"
  
 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
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

          <Route path="/tvshows" element={<TvShows addwatchlist={addwatchlist} setAddWatchlist={setAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/> }/>

          <Route path="/moviedetails/:id" element= {movie && <MovieDetails movie={movie} />}  />
        </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;
