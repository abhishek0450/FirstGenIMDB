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
    for (let i = 0; i < addwatchlist.length; i++) {
      if (addwatchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div
        className="h-60 w-36 bg-cover bg-center rounded-xl m-5 hover:scale-105 transition delay-102 duration-300 ease-in-out flex flex-col justify-between items-end shadow-xl shadow-black"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w185/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <button
            onClick={() => handleRemoveFromWatchlist(movieObj)}
            className="m-2 flex justify-center items-center bg-gray-900/60 p-2 h-8 w-8  rounded-lg"
          >
            &#10060;
          </button>
        ) : (
          <button
            onClick={() => handleAddToWatchlist(movieObj)}
            className="m-2 flex justify-center items-center bg-gray-900/60 p-2 h-8 w-8  rounded-lg"
          >
            &#128525;
          </button>
        )}
        <Link to={`/moviedetails/${movieObj.id}`} className="w-full">
        <div className="text-base text-white text-center w-full bg-gray-900/60 rounded-b-lg p-1 ">
          {original_title}
          
        </div>
        </Link>
      </div>
    </>
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
