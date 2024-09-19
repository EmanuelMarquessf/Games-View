import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import GenrePage from "./pages/GenrePage";
import GamePage from './pages/GamePage'
import Footer from "./components/Footer";

import { fetchDataPopular, fetchDataSearch, fetchData30Day } from "./services/rawg.service";
import GameCard from "./components/gameCard/GameCard";
import Search from "./components/Search";
import Header from "./components/Header";
import GamesByGenre from "./pages/GamesByGenre";
import GamesByTag from "./pages/GamesByTag";
import GamesByFilter from "./pages/GamesByFilter";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  function searchChange(event) {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  
    async function fetch() {
      const data = await fetchDataSearch(inputValue); // Use inputValue aqui
      setSearchData(data.results);
    }
  
    if (inputValue.length > 3) { // Use inputValue aqui também
      fetch();
    } else if(inputValue.length < 3){
      setSearchData([])
    }
  }

  return (
    <BrowserRouter>
      <Header> 
        <Search searchInput={searchInput} setSearchInput={setSearchInput} onChange={searchChange} searchData={searchData} setSearchData={setSearchData}/>
      </Header>
      <div className="px-2 lg:px-16 2xl:px-48 pt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/genre/:genre" element={<GamesByFilter />} />
          <Route path="filter/:filter" element={<GamesByFilter />} />
          <Route path=":id" element={<GamePage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
