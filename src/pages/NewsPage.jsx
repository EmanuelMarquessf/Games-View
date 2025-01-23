import { useState, useEffect } from "react";
import { fetchDataNews } from "../services/news.service.js";
import NewsCard from "../components/News/NewsCard.jsx";

function NewsPage() {
  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function fetchNewsData() {
      try {
        const data = await fetchDataNews(6);

        setNewsData(data.results);
        console.log(newsData);
      } catch (error) {
        console.error("Erro ao buscar os dados dos jogos:", error);
      }
    }

    fetchNewsData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return null;
  return (
    <div className="grid grid-cols-3 gap-8 aspect-video">
      {newsData.map((news,index) => (
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
  );
}

export default NewsPage;
