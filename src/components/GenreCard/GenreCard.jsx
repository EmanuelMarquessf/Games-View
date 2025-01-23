import React from 'react'
import { NavLink } from 'react-router-dom'

function GenreCard({genre}) {
  return (
    <NavLink to={`${genre.slug}`} 
    className="rounded-xl rounded-b-2xl cursor-pointer min-w-[280px] h-60  bg-cover bg-center flex items-end justify-end"
    style={{ backgroundImage: `url(${genre.image_background})` }}
    >
      <div className='flex items-end justify-end w-full h-48 bg-gradient-to-t from-darkColdBlue-500 to-transparent rounded-b-xl'>
        <span className='text-right px-4 py-2 font-poppins font-semibold text-2xl text-darkColdBlue-60 '>{genre.name}</span>
      </div>
    </NavLink>
  )
}

export default GenreCard