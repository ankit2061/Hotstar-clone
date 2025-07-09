import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then(resp => {
      setMovieList(resp.data.results);
    });
  };

  const checkScrollPosition = () => {
    if (elementRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = elementRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const element = elementRef.current;
    if (element) {
      element.addEventListener('scroll', checkScrollPosition);
      return () => element.removeEventListener('scroll', checkScrollPosition);
    }
  }, [movieList]);

  const getScrollAmount = () => {
    if (window.innerWidth < 640) return 300; // Mobile
    if (window.innerWidth < 768) return 400; // Small tablet
    if (window.innerWidth < 1024) return 500; // Tablet
    if (window.innerWidth < 1280) return 600; // Desktop
    return 700; // Large desktop
  };

  const sliderRight = (element) => {
    if (element) {
      element.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
      });
    }
  };

  const sliderLeft = (element) => {
    if (element) {
      element.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group/container">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-200 ease-in-out opacity-0 group-hover/container:opacity-100 ml-2"
          onClick={() => sliderLeft(elementRef.current)}
          aria-label="Previous movies"
        >
          <HiChevronLeft className="text-xl" />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-200 ease-in-out opacity-0 group-hover/container:opacity-100 mr-2"
          onClick={() => sliderRight(elementRef.current)}
          aria-label="Next movies"
        >
          <HiChevronRight className="text-xl" />
        </button>
      )}

      {/* Movie Cards Container */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5 lg:gap-6 scrollbar-hide px-4 sm:px-6 md:px-8 py-4 scroll-smooth items-center"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        {movieList.map((item, index) => (
          <div key={item.id || index} className="flex-shrink-0">
            {index_ % 3 === 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none opacity-0 group-hover/container:opacity-100 transition-opacity duration-200"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none opacity-0 group-hover/container:opacity-100 transition-opacity duration-200"></div>
    </div>
  );
}

export default MovieList;