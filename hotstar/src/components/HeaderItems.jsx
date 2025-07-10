import React from 'react'

function HeaderItems({ name, Icons }) {
  return (
    <div className='text-white flex items-center gap-2 sm:gap-3
      text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]
      font-semibold cursor-pointer hover:underline underline-offset-8
      transition-all duration-200 px-2 py-1 rounded-lg hover:bg-gray-800/50'>
      <Icons className="flex-shrink-0" />
      <h2 className='text-sm sm:text-base md:text-lg lg:text-lg whitespace-nowrap'>
        {name}
      </h2>
    </div>
  )
}

export default HeaderItems;