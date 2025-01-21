import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
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
    if (page < 500) setPage(page + 1);
  }

  function prevPage() {
    if (page > 1) setPage(page - 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=789d07148ac9596cfc9028dc63928cec&language=en-US&page=${page}`
      )
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  return (
    <div className="movies-container p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center my-6 font-serif">
        Trending Movies
      </h1>

      {/* Movie Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            original_title={movieObj.original_title}
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            addwatchlist={addwatchlist}
          />
        ))}
      </div>

      {/* Pagination */}
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
