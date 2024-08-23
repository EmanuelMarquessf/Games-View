import {useEffect} from 'react'



function Search({searchInput, setSearchInput, onChange, searchData, setSearchData}) {
  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  
  return (
    <div className="ml-96 mr-36 bg-darkColdBlue-500 p-10 rounded-lg ">
      <input className='w-full px-8 py-4' type="text" value={searchInput} onChange={onChange}/>
      {searchData && (
        <div className='relative bg-darkColdBlue-500 w-full'> 
          <div className='absolute bg-darkColdBlue-500 w-full z-10 left-0 top-0'> 
            {searchData.map(game => (
              <div className='flex items-center'>
                <div className='w-20 h-20 m-2 bg-cover bg-center rounded-lg' style={{backgroundImage: `url(${game.background_image})`}}></div>
                <span key={game.id}>{game.name}</span>
              </div>
            ))}
            </div>
        </div>
      )}
    </div>
  )
}

export default Search