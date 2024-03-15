import PropTypes from "prop-types";

function MovieCard({ poster_path, original_title }) {
  return (
    <>
      <div
        className="h-60 w-36 bg-cover bg-center rounded-xl m-5 hover:scale-105 transition delay-102 duration-300 ease-in-out flex  items-end "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w185/${poster_path})`,
        }}
      >
        <div className="text-base text-white text-center w-full bg-gray-900/60 rounded-b-lg p-1 ">
          {original_title}
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
};

export default MovieCard;
