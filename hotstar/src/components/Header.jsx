import React, { useState } from 'react'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import { PiFilmReelFill } from "react-icons/pi";;

import HeaderItems from './HeaderItems';


function Header() {

    const [toggle,setToggle]=useState(false);
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
    
        <div className='flex items-center justify-between p-5'>
            <div className='flex gap-8'>

                <img src='/images/Logo.png' className='w-[80px] md:w-[115px] object-cover p-5'></img>

                <div className='hidden md:flex gap-8'>
                    {menu.map((item) =>
                        <li key={item.name} className='mt-2 mr-3'>
                            <HeaderItems name={item.name} Icons={item.icon} />
                            {/* //Using props property */}
                        </li>
                    )}
                </div>

                <div className='flex md:hidden gap-8'>
                    {menu.map((item, index) => index < 3 && (
                        <li key={item.name} className='mr-3'>
                            <HeaderItems name={''} Icons={item.icon} />
                            {/* //Using props property */}
                        </li>
                    ))}
                    <div className=' md:hidden mt-6' onClick={()=>setToggle(!toggle)}>
                        <HeaderItems name={''} Icons={HiDotsVertical} />
                        {toggle?<div className='absolute mt-3 bg-[#121212]
                         border-[1px] border-gray-700 p-3 px-5 py-4
                        '>
                            {menu.map((item, index) => index > 2 && (

                                <li key={item.name} className='mr-3'>
                                    <HeaderItems name={item.name} Icons={item.icon} />
                                    {/* //Using props property */}
                                </li>
                            ))}
                        </div>:null}
                    </div>
                </div>

            </div>
            <img src='/images/pp.jpg' alt='profile-photo' className='w-[60px] rounded-full mr-[15px]' />
        </div>

    );
}
export default Header