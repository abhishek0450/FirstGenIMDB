import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({
  poster_path,
  original_title,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  movieObj,
  addwatchlist,
}) {
  function doesContain(movieObj) {
    return addwatchlist.some((item) => item.id === movieObj.id);
  }

  return (
    <div
      className="movie-card group relative h-80 w-48 bg-cover bg-center rounded-lg m-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w300/${poster_path})`,
      }}
    >
      {/* Add/Remove from Watchlist Button */}
      {doesContain(movieObj) ? (
        <button
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="absolute top-2 right-2 bg-gray-900/70 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
        >
          &#10060;
        </button>
      ) : (
        <button
          onClick={() => handleAddToWatchlist(movieObj)}
          className="absolute top-2 right-2 bg-gray-900/70 text-white p-2 rounded-full hover:bg-green-600 transition duration-300"
        >
          &#128525;
        </button>
      )}

      {/* Movie Title Link */}
      <Link to={`/moviedetails/${movieObj.id}`} className="absolute bottom-0 w-full">
        <div className="text-sm text-white text-center bg-gray-900/80 py-2 rounded-b-lg transition duration-300 group-hover:bg-black/90">
          {original_title}
        </div>
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  movieObj: PropTypes.object.isRequired,
  handleAddToWatchlist: PropTypes.func.isRequired,
  handleRemoveFromWatchlist: PropTypes.func.isRequired,
  addwatchlist: PropTypes.array.isRequired,
};

export default MovieCard;
