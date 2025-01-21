import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import genreids from "../utility/genre";

const Watchlist = ({
  addwatchlist,
  setAddWatchlist,
  handleRemoveFromWatchlist,
}) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  const handleGenreFilter = (genre) => {
    setCurrentGenre(genre);
  };

  const sortIncreaseRatings = () => {
    const sorted = addwatchlist.sort((a, b) => a.vote_average - b.vote_average);
    setAddWatchlist([...sorted]);
  };

  const sortDecreaseRatings = () => {
    const sorted = addwatchlist.sort((a, b) => b.vote_average - a.vote_average);
    setAddWatchlist([...sorted]);
  };

  const sortIncreasePopularity = () => {
    const sorted = addwatchlist.sort((a, b) => a.popularity - b.popularity);
    setAddWatchlist([...sorted]);
  };

  const sortDecreasePopularity = () => {
    const sorted = addwatchlist.sort((a, b) => b.popularity - a.popularity);
    setAddWatchlist([...sorted]);
  };

  useEffect(() => {
    const tempGenres = addwatchlist.map((movie) => genreids[movie.genre_ids[0]]);
    setGenreList(["All Genres", ...new Set(tempGenres)]);
  }, [addwatchlist]);

  return (
    <>
      {/* Genre Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {genreList.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreFilter(genre)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              currentGenre === genre
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto px-4">
        <table className="min-w-full table-auto border-collapse rounded-lg shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Poster</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                  <button onClick={sortIncreaseRatings}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                  <span>Rating</span>
                  <button onClick={sortDecreaseRatings}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex justify-center items-center gap-2">
                  <button onClick={sortIncreasePopularity}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                  <span>Popularity</span>
                  <button onClick={sortDecreasePopularity}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                </div>
              </th>
              <th className="px-4 py-2">Genre</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {addwatchlist
              .filter((movie) =>
                currentGenre === "All Genres"
                  ? true
                  : genreids[movie.genre_ids[0]] === currentGenre
              )
              .filter((movie) =>
                movie.original_title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie) => (
                <tr key={movie.id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      alt="poster"
                      className="w-24 h-36 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold">{movie.original_title}</td>
                  <td className="px-4 py-2">{movie.vote_average}</td>
                  <td className="px-4 py-2">{movie.popularity}</td>
                  <td className="px-4 py-2">{genreids[movie.genre_ids[0]]}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleRemoveFromWatchlist(movie)}
                      className="px-4 py-2 bg-red-500 text-white  rounded-lg shadow hover:bg-red-600 transition-all"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Watchlist.propTypes = {
  addwatchlist: PropTypes.array.isRequired,
  setAddWatchlist: PropTypes.func.isRequired,
  handleRemoveFromWatchlist: PropTypes.func.isRequired,
};

export default Watchlist;
