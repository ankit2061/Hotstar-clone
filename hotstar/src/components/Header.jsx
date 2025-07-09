import React, { useState } from 'react'
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import { PiFilmReelFill } from "react-icons/pi";
import HeaderItems from './HeaderItems';

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'Movies',
      icon: PiFilmReelFill
    },
    {
      name: 'Series',
      icon: HiTv
    }
  ];

  return (
    <div className='fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-between p-3 sm:p-4 md:p-5'>
      <div className='flex items-center gap-3 sm:gap-6 md:gap-8'>
        {/* Logo - responsive sizing */}
        <img
          src='/images/Logo.png'
          className='w-[50px] sm:w-[60px] md:w-[70px] lg:w-[85px] object-cover'
          alt="Logo"
        />
        {/* Desktop Menu - hidden on mobile/tablet */}
        <div className='hidden lg:flex gap-8 xl:gap-10'>
          {menu.map((item) =>
            <HeaderItems key={item.name} name={item.name} Icons={item.icon} />
          )}
        </div>
        {/* Mobile/Tablet Menu */}
        <div className='flex lg:hidden items-center gap-4 sm:gap-6'>
          {/* Show first 3 items on smaller screens */}
          {menu.map((item, index) => index < 3 && (
            <HeaderItems key={item.name} name={''} Icons={item.icon} />
          ))}
          {/* Dropdown toggle */}
          <div className='relative'>
            <div onClick={() => setToggle(!toggle)}>
              <HeaderItems name={''} Icons={HiDotsVertical} />
            </div>
            {/* Dropdown menu */}
            {toggle && (
              <div className='absolute top-full right-0 mt-2 bg-[#121212]
 border border-gray-700 rounded-lg p-4 min-w-[160px]
 shadow-lg z-50'>
                {menu.map((item, index) => index > 2 && (
                  <div key={item.name} className='py-2'>
                    <HeaderItems name={item.name} Icons={item.icon} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Profile Image - responsive sizing */}
      <img
        src='/images/pp.jpg'
        alt='profile-photo'
        className='w-[40px] sm:w-[50px] md:w-[60px] rounded-full flex-shrink-0'
      />
    </div>
  );
}

export default Header;