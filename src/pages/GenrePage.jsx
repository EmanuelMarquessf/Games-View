import React, { useEffect, useState } from "react";
import { fetchGenres } from "../services/rawg.service";
import GenreCard from "../components/GenreCard/GenreCard.jsx";

function GenrePage() {
  const [genresData, setGenresData] = useState([]);

  async function fetchData() {
    const data = await fetchGenres();
    setGenresData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(genresData);
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
