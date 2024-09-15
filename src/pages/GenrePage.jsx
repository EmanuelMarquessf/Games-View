import React, { useEffect, useState } from "react";
import { fetchGenres } from "../services/rawg.service";
import CategoryCard from "../components/GenreCard/CategoryCard.jsx";

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
      <h1 className="text-darkColdBlue-60 font-poppins text-4xl font-bold">
        Genres
      </h1>
      <div className="grid grid-cols-5 gap-8">
        {genresData?.map((genre) => (
          <CategoryCard key={genre.id} category={genre} />
        ))}
      </div>
    </section>
  );
}

export default GenrePage;
