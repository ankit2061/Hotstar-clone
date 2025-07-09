import React from 'react'
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";
import disneyV from './../assets/videos/disney.mp4';
import marvelV from './../assets/videos/marvel.mp4';
import nationalGeographicV from './../assets/videos/national-geographic.mp4';
import pixarV from './../assets/videos/pixar.mp4';
import starWarsV from './../assets/videos/star-wars.mp4';

function ProductionHouse() {
  const productionHouselist = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: marvel, video: marvelV },
    { id: 3, image: nationalG, video: nationalGeographicV },
    { id: 4, image: pixar, video: pixarV },
    { id: 5, image: starwar, video: starWarsV }
  ];

  return (
    <div className='flex gap-3 md:gap-10 p-2 px-5 md:px-16'>
      {productionHouselist.map((item) => (
        <div 
          key={item.id}
          className='border-[2px] border-gray-700 rounded-lg
                     hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer
                     relative shadow-xl shadow-gray-600 overflow-hidden
                     w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px]'
        >
          <video 
            src={item.video} 
            autoPlay 
            loop 
            playsInline 
            muted
            className='absolute top-0 left-0 w-full h-full object-cover rounded-md z-10 
                       opacity-0 hover:opacity-50 transition-opacity duration-300'
          />
          <img 
            src={item.image} 
            alt="Production house logo"
            className='w-full h-auto rounded-md block relative z-[1]'
          />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse