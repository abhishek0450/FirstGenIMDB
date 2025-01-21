import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = "789d07148ac9596cfc9028dc63928cec";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const { poster_path, title, overview, vote_average } = movie;

  return (
    <div className="main mt-16 flex flex-col items-center px-4 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-200 p-6 rounded-xl shadow-lg">
        {/* Movie Poster */}
        <div className="poster">
          <img
            className="rounded-lg shadow-md w-full max-w-[300px] md:w-auto md:h-[450px]"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="title text-2xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="overview text-gray-900 text-lg leading-relaxed mb-4">{overview}</p>
          <p className="rating text-lg font-semibold text-gray-700">
            Rating: <span className="text-yellow-700 text-2xl font-bold">{vote_average.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;


//https://api.themoviedb.org/3/movie/1011985?api_key=789d07148ac9596cfc9028dc63928cec



