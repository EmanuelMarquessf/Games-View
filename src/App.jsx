import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import GenrePage from "./pages/GenrePage";
import GamePage from './pages/GamePage'
import Footer from "./components/Footer";

import { fetchDataSearch } from "./services/rawg.service";

import Search from "./components/Search";
import Header from "./components/Header";
import GamesByFilter from "./pages/GamesByFilter";
import Comming from "./pages/Comming";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  function searchChange(event) {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  
    async function fetch() {
      const data = await fetchDataSearch(inputValue); 
      setSearchData(data.results);
    }
  
    if (inputValue.length > 3) { 
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
      <div className="px-2 lg:px-16 2xl:px-48 py-20 md:py-20 min-h-[800px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/genre/:genre" element={<GamesByFilter />} />
          <Route path="filter/:filter" element={<GamesByFilter />} />
          <Route path=":id" element={<GamePage />} />
          <Route path="/comming" element={<Comming />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
