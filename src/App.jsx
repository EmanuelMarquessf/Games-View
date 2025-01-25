import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GenrePage from "./pages/GenrePage";
import GamePage from "./pages/GamePage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";

import { fetchDataBase } from "./services/rawg.service";

import Search from "./components/Search";
import Header from "./components/Header";
import GamesByFilter from "./pages/GamesByFilter";
import Comming from "./pages/Comming";

import Chat from "./components/GeminiChat/Chat";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function searchChange(event) {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    async function fetch() {
      const data = await fetchDataBase('search', inputValue);
      setSearchData(data.results);
    }

    if (inputValue.length > 3) {
      fetch();
    } else if (inputValue.length < 3) {
      setSearchData([]);
    }
  }

  return (
    <BrowserRouter>
      <Header>
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onChange={searchChange}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </Header>
      <div className="px-2 lg:px-16 2xl:px-36 py-20 md:py-20 min-h-[1000px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/genre/:genre" element={<GamesByFilter />} />
          <Route path="filter/:filter" element={<GamesByFilter />} />
          <Route path=":id" element={<GamePage />} />
          <Route path="/comming" element={<Comming />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
      <Footer></Footer>
      {/* <Chat></Chat> */}
    </BrowserRouter>
  );
}

export default App;
