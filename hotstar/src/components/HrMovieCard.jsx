import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 group relative cursor-pointer">
      <div className="relative">
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          alt={movie.title || 'Movie poster'}
          className="w-[280px] h-[160px] sm:w-[320px] sm:h-[180px] md:w-[360px] md:h-[200px] lg:w-[400px] lg:h-[225px] xl:w-[440px] xl:h-[250px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-2 group-hover:border-white"
          onError={(e) => {
            e.target.style.display = 'flex';
            e.target.style.backgroundColor = '#374151';
            e.target.style.color = 'white';
            e.target.style.alignItems = 'center';
            e.target.style.justifyContent = 'center';
            e.target.alt = 'Image not found';
          }}
        />
        
        {/* Overlay with movie title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
            {movie.title || movie.name}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-1">
            {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0] || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HrMovieCard