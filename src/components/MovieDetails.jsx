
import '../css/MovieDetails.css'

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function MovieDetails({movie}) {
  const { poster_path, title, overview, id, vote_average } = movie;
  
  return (

    <div className='main mt-[60px]'>
     
    <div  className='box poster  flex items-center justify-center rounded-lg ' >
    <img className='rounded-3xl h-[350px]  shadow-xl shadow-black' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      
    </div>
    <div className='box title  text-xl font-bold text-blue-400 flex items-center'>{title}</div>
    <div className='box buttons  text-blue-400 flex items-center'>
    <FontAwesomeIcon icon={faHeart}  size="3xl" style={{color: "#ff0000",}} />
    </div>
    <div className='box overview  text-blue-400 flex items-center'>{overview}</div>
    <div className='box credits  text-3xl font-bold text-blue-400 flex items-center'>{id}</div>
    
    </div>
  )
}

export default MovieDetails

//https://api.themoviedb.org/3/movie/1011985?api_key=789d07148ac9596cfc9028dc63928cec




// const MovieDetails = ({ movie }) => {
//   const { poster_path, title, overview, cast, vote_average } = movie;

//   return (
//     <div className="movie-detail">
//       <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
//       <h2>{title}</h2>
//       <p>{overview}</p>
//       <p>Cast: {cast}</p>
//       <p>Rating: {vote_average}</p>
//       <button>Add to Favorites</button>
//       <button>Add to Watchlist</button>
//     </div>
//   );
// };

// export default MovieDetails;

