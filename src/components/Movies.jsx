import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=789d07148ac9596cfc9028dc63928cec&language=en-US&page=7"
      )
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []);

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
              poster_path={movieObj.poster_path}
              original_title={movieObj.original_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

//api key
//https://api.themoviedb.org/3/movie/popular?api_key=789d07148ac9596cfc9028dc63928cec&language=en-US&page=1

//https://image.tmdb.org/t/p/orignal/${movieObj.poster_path}
