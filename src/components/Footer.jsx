import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-darkColdBlue-70 bg-darkColdBlue-600 border-darkColdBlue-400 border-t-2 z-50 py-4 md:px-20 xl:px-48 font-roboto'>
      <ul className='flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center'>
        <li>
          <NavLink to="/"><img className="w-14" src="/favicon.svg" alt="" /></NavLink>
        </li>
        <li>Develop by <a className='font-medium underline text-base hover:text-darkColdBlue-60' target="_blank" href="https://emanuelmarquessf.netlify.app/">Emanuel Fonseca</a></li>
        <li><a className='hover:text-darkColdBlue-60' href="#header">VOLTAR PARA O TOPO</a></li>
      </ul>
    </footer>
  )
}

export default Footer