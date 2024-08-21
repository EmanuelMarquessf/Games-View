import React from 'react'

function Search() {
  return (
    <div className="ml-96 mr-36 bg-darkColdBlue-500 px-10 rounded-md">
      <form className='flex items-center justify-center gap-5 bg-darkColdBlue-500 w-full py-20  ' action="">
        <input className='flex-1 px-8 py-4' type="text" />
        <button className='px-8 py-4 bg-lightColdBlue-800'>Search</button>
      </form>
    </div>
  )
}

export default Search