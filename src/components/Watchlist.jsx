import PropTypes from "prop-types";
import { useState } from "react";
import genreids from '../utility/genre';

const Watchlist = ({ addwatchlist, setAddWatchlist }) => {
  let [search, setSearch] = useState("");

  let sortIncreaseRatings = () => {
    let sortedIncreaseRatings = addwatchlist.sort((movieA,movieB)=>{
        return movieA.vote_average - movieB.vote_average
    })
    setAddWatchlist([...sortedIncreaseRatings])
  }

  let sortDecreaseRatings = () => {
    let sortedDecreaseRatings = addwatchlist.sort((movieA,movieB)=>{
        return movieB.vote_average - movieA.vote_average
    })
    setAddWatchlist([...sortedDecreaseRatings])
  }

  let sortIncreasePopularity = () => {
    let sortedIncreasePopularity = addwatchlist.sort((movieA,movieB)=>{
      return movieA.popularity - movieB.popularity
  })
  setAddWatchlist([...sortedIncreasePopularity])
  }

  let sortDecreasePopularity = () => {
    let sortedDecreasePopularity = addwatchlist.sort((movieA,movieB)=>{
      return movieB.popularity - movieA.popularity
  })
  setAddWatchlist([...sortedDecreasePopularity])
  }


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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
              
              <th className="flex justify-center">
                
                <div className="p-2" onClick={sortIncreaseRatings}>
                  <i
                    className="fa-solid fa-arrow-down"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                <div className="p-2">Rating</div>
                <div className="p-2" onClick={sortDecreaseRatings}>
                  <i
                    className="fa-solid fa-arrow-up"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                
              </th>
              <th >
                <div className="flex justify-center">
                <div className="p-2" onClick={sortIncreasePopularity}>
                  <i
                    className="fa-solid fa-arrow-down"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                <div className="p-2">Popularity</div>
                <div className="p-2" onClick={sortDecreasePopularity}>
                  <i
                    className="fa-solid fa-arrow-up"
                    style={{ color: "#000000" }}
                  ></i>
                </div>
                </div>
              </th>
              
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {addwatchlist
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
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
                    <td>{genreids[movieObj.genre_ids[0]]}/{genreids[movieObj.genre_ids[1]]}/{genreids[movieObj.genre_ids[2]]}</td>
                    <td>
                      <button  className="bg-red-200 px-2 rounded-lg">
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
  setAddWatchlist: PropTypes.array.isRequired,
  

  
};
