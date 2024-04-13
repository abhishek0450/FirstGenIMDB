

import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";



const Movies = ({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  addwatchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  function nextPage() {
    if (page >= 500) {
      setPage(500);
    } else {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }
  

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=789d07148ac9596cfc9028dc63928cec&language=en-US&page=${page}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  

  return (
    <div>
      <div className="text-2xl font-bold  text-center m-5 font-serif Times New Roman">
        Trending Movies
      </div>
      <div className="flex flex-wrap justify-evenly">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              original_title={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              addwatchlist={addwatchlist}
            />
          );
        })}
      </div>
      <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  handleAddToWatchlist: PropTypes.func.isRequired,
  handleRemoveFromWatchlist: PropTypes.func.isRequired,
  addwatchlist: PropTypes.array.isRequired,
};
