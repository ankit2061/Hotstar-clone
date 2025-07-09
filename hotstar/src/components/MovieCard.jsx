import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 group relative cursor-pointer">
      <img 
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title || 'Movie poster'}
        className="w-[140px] h-[210px] sm:w-[160px] sm:h-[240px] md:w-[180px] md:h-[270px] lg:w-[200px] lg:h-[300px] xl:w-[220px] xl:h-[330px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-2 group-hover:border-white"
        onError={(e) => {
          e.target.style.display = 'block';
          e.target.style.backgroundColor = '#374151';
          e.target.style.color = 'white';
          e.target.style.display = 'flex';
          e.target.style.alignItems = 'center';
          e.target.style.justifyContent = 'center';
          e.target.alt = 'Image not found';
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
            {movie.title || movie.name}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0] || 'N/A'}
          </p>
        </div>
    </div>
  );
}

export default MovieCard;