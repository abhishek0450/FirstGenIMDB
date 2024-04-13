import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const TvShows = ({
    handleAddToWatchlist,
    handleRemoveFromWatchlist,
    addwatchlist,
  }) => {
    const [shows, setShows] = useState([]);
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
          
          `https://api.themoviedb.org/3/discover/tv?api_key=789d07148ac9596cfc9028dc63928cec&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`
        )
        .then(function (response) {
          setShows(response.data.results);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    }, [page]);
  
    
  
    return (
      <div>
        <div className="text-2xl font-bold  text-center m-5 font-serif Times New Roman">
         Popular Tv Shows
        </div>
        <div className="flex flex-wrap justify-evenly">
          {shows.map((movieObj) => {
            return (
              <MovieCard
                key={movieObj.id}
                movieObj={movieObj}
                poster_path={movieObj.poster_path}
                original_title={movieObj.original_name}
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
  
  export default TvShows;
  
  TvShows.propTypes = {
    handleAddToWatchlist: PropTypes.func.isRequired,
    handleRemoveFromWatchlist: PropTypes.func.isRequired,
    addwatchlist: PropTypes.array.isRequired,
  };
  