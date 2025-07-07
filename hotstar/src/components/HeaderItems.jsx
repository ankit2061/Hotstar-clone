import React from 'react'

function HeaderItems({name,Icons}) {
  return (
    <div className='text-white flex items-center gap-3 text-[25px]
     font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'   >
        <Icons/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItems