import { useState, useEffect } from "react";
import { fetchDataNews } from "../services/news.service.js";
import NewsCard from "../components/News/NewsCard.jsx";

function NewsPage() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(false);

  async function fetchNewsData() {
    setLoading(true); // Inicia o carregamento
    setError(false); // Reseta o erro ao iniciar a requisição

    try {
      const data = await fetchDataNews(9);
      if (data?.results) {
        setNewsData(data.results);
      } else {
        setError(true); // Marca como erro se os dados forem inválidos
      }
    } catch (error) {
      console.error("Erro ao buscar os dados das notícias:", error);
      setError(true); // Marca como erro em caso de falha
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-darkColdBlue-60 text-xl">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-darkColdBlue-60 text-2xl font-semibold">
          Unable to load news
        </h1>
        <p className="text-gray-600 text-darkColdBlue-90">
          Tente novamente mais tarde ou confira nossas outras seções.
        </p>
        <button
          className="bg-darkColdBlue-60 text-white px-4 py-2 rounded-lg shadow hover:bg-darkColdBlue-80 transition duration-300"
          onClick={fetchNewsData}
        >
          Tentar novamente
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-darkColdBlue-60 font-poppins text-3xl font-semibold capitalize">
        Last Games News
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            index={4}
            title={news.title}
            description={news.description}
            link={news.link}
            image={news.image_url}
            author={news.creator}
            date={news.pubDate}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
