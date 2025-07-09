import React from 'react'

function HeaderItems({ name, Icons }) {
  return (
    <div className='text-white flex items-center gap-3 sm:gap-4 
                    text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] 
                    font-semibold cursor-pointer hover:underline underline-offset-8 
                    transition-all duration-200 px-2 py-1 rounded-lg hover:bg-gray-800/50'>
      <Icons className="flex-shrink-0" />
      <h2 className='text-base sm:text-lg md:text-xl lg:text-xl whitespace-nowrap'>
        {name}
      </h2>
    </div>
  )
}

export default HeaderItems;