import React from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import { User, Bolt } from 'lucide-react'


function Header({children}) {
  return (
    <div className='flex flex-row gap-10 bg-darkColdBlue-600 w-full h-20 fixed  text-xl font-medium items-center justify-between px-40 py-8 border-b-2 border-darkColdBlue-400'>
      <ul className='flex gap-10 items-center text-lightColdBlue-100'>
        <li><NavLink to="">Home</NavLink></li>
        <div className='w-[2px] h-5 bg-lightColdBlue-200'></div>
        <li><NavLink to="">Game</NavLink></li>
        <div className='w-[2px] h-5 bg-lightColdBlue-200'></div>
        <li>Category</li>
      </ul>
      <ul className='flex flex-row items-center justify-center alig gap-2 text-lightColdBlue-100'>
        <li>{children}</li>
        <li><NavLink><User /></NavLink></li>
        <li><NavLink><Bolt /></NavLink></li>
      </ul>
    </div>
  )
}

export default Header