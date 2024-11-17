

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MovieDetails.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  if (!movie) return <div>Loading...</div>;

  const { poster_path, title, overview, vote_average } = movie;

  return (
    <div className='main mt-[60px]'>
      <div className='box poster flex items-center justify-center rounded-lg'>
        <img className='rounded-3xl h-[350px] shadow-xl shadow-black' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className='box title text-xl font-bold text-blue-400 flex items-center'>{title}</div>
      <div className='box buttons text-blue-400 flex items-center'>
        <FontAwesomeIcon icon={faHeart} size="3xl" style={{color: "#ff0000",}} />
      </div>
      <div className='box overview text-blue-400 flex items-center'>{overview}</div>
      <div className='box credits text-3xl font-bold text-blue-400 flex items-center'>{vote_average}</div>
    </div>
  );
}

export default MovieDetails;

//https://api.themoviedb.org/3/movie/1011985?api_key=789d07148ac9596cfc9028dc63928cec



