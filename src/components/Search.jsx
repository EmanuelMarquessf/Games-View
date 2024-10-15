import { SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Search({
  searchInput,
  setSearchInput,
  onChange,
  searchData,
  setSearchData,
}) {
  useEffect(() => {
    // console.log(searchData);
  }, [searchData]);

  function SearchInputReset() {
    setSearchInput("");
    setSearchData([]);
  }

  return (
    <div className="flex flex-col  rounded-lg text-darkColdBlue-700">
      <div className="flex items-center px-2  w-full bg-darkColdBlue-800 rounded-md text-lightColdBlue-200">
        <input
          placeholder="Search"
          className="px-2 py-3 w-[300px] border-none focus:outline-none font-normal bg-darkColdBlue-800"
          type="text"
          value={searchInput}
          onChange={onChange}
        />
        <SearchIcon />
      </div>
      {searchData && (
        <div className="relative bg-darkColdBlue-500 w-full">
          <div className="absolute bg-darkColdBlue-700 w-full z-10  left-0 top-0 rounded-md">
            {searchData.map((game) => (
              <NavLink
                to={`/${game.id}`}
                onClick={() => SearchInputReset()}
                key={game.id}
                className="flex items-center text-lightColdBlue-100 border-x-2 border-b-2 border-darkColdBlue-400"
              >
                <div
                  className="min-w-20 min-h-20 m-2 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${game.background_image})` }}
                  aria-label={`Background image of ${game.name}`}
                ></div>
                <span>{game.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
