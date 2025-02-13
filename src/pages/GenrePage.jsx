import React, { useEffect, useState } from "react";
import GenreCard from "../components/GenreCard/GenreCard.jsx";
import { fetchDataBase } from "../services/rawg.service.js"

function GenrePage() {
  const [genresData, setGenresData] = useState([]);

  async function fetchData() {
    const data = await fetchDataBase("genres", '');
    setGenresData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
  }, [genresData]);

  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-darkColdBlue-60 font-poppins text-4xl font-bold">Genres</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {genresData?.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  );
}

export default GenrePage;
