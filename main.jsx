import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import ShowMore from "../ShowMore/ShowMore";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

function Main({ isLoading, newsItems, handleNewsSaved, handleRemoveArticle }) {
  const [renderedCards, setRenderedCards] = useState(3);

  console.log("newsItems in Main:", newsItems);

  const handleShowMore = () => {
    setRenderedCards((prev) => Math.min(prev + 3, 9));
  };

  const articles = newsItems?.articles || [];

  return (
    <main className="main">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h2 className="main__title">Search results</h2>
          <section className="main__cards">
            <ul className="main__cards-list">
              {Array.isArray(articles) && articles.length > 0 ? (
                articles
                  .slice(0, renderedCards)
                  .map((item) => (
                    <NewsCard
                      key={item.id}
                      data={item}
                      handleNewsSaved={() => handleNewsSaved({ data: item })}
                      handleRemoveArticle={handleRemoveArticle}
                    />
                  ))
              ) : (
                <p>Nothing found</p>
              )}
            </ul>
            {renderedCards < 9 && renderedCards < articles.length && (
              <ShowMore onClick={handleShowMore} />
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default Main;
