import PropTypes from "prop-types";
const Watchlist = ({ addwatchlist }) => {
  return (
    <>
      <div className="flex flex-warp justify-center m-4 ">
        <div className="flex justify-center items-center bg-blue-400 rounded-xl  font-bold text-white h-[3rem] w-[9rem] mx-2">
          Action
        </div>
        <div className="flex justify-center items-center bg-gray-400/50 rounded-xl  font-bold text-white h-[3rem] w-[9rem] mx-2">
          Action
        </div>
      </div>

      <div className="flex justify-center my-4 ">
        <input
          type="text"
          placeholder="Search movies"
          className="bg-gray-200 px-4 h-[3rem] w-[14rem] outline-none"
        />
      </div>
      <div className="flex border border-2 space-x-8 items-center m-8 rounded-lg">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b-2">
              <th></th>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {addwatchlist.map((movieObj) => {
              return (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${movieObj.poster_path}`}
                      alt="movie_poster"
                      className="h-[6rem]  w-[6rem] flex justify-center"
                    />
                  </td>
                  <td>{movieObj.original_title}</td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{movieObj.genre_ids[0]}</td>
                  <td>
                    <button className="bg-red-200 px-2 rounded-lg">
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;

Watchlist.propTypes = {
  addwatchlist: PropTypes.array.isRequired,
};
