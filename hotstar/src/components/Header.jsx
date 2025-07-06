import React from 'react'
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
                <img src='/images/Logo.png' className='w-[80px] md:w-[115px] object-cover p-2 mr-25 ml-10'></img>
                {menu.map((item) =>
                    <li key={item.name} className='mt-2 mr-3'>
                        <HeaderItems name={item.name} Icons={item.icon} />
                        {/* //Using props property */}
                    </li>
                )}
            </div>
            <img src='/images/pp.jpg' alt='profile-photo' className='w-[60px] rounded-full'/>
        </div>

    );
}
export default Header