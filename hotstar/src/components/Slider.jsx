import React, { useEffect, useState, useRef } from 'react'
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import GlobalApi from '../services/GlobalApi'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;

function Slider() {
  // Initialize movieList as an empty array instead of undefined
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null);

  useEffect(() => {
    getTrendingMovies();
  }, [])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
      console.log(resp.data.results)
      setMovieList(resp.data.results)
    })
    .catch(error => {
      console.error('Error fetching movies:', error)
      // Keep movieList as empty array on error
    })
  }

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
  }

  return (
    <div className="relative">
      <HiChevronLeft 
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer z-10'
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight 
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0'
        onClick={() => sliderRight(elementRef.current)}
      />
      <div 
        className='flex overflow-x-auto w-full px-16 py-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden' 
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index} // Add key prop for React list rendering
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title || 'Movie poster'} // Add alt text for accessibility
            className='min-w-full md:h-[500px] object-cover object-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
          />
        ))}
      </div>
    </div>
  )
}

export default Slider