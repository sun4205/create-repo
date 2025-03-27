const handleNewsSaved = ({ data }) => {
   
  const token = localStorage.getItem("jwt");
  const articleId = crypto.randomUUID();
  const saved = data.saved;
  const { source, title, date, description, image } = data;

  const currentArticle = Array.isArray(newsItems.articles)
    ? newsItems.articles
    : [];
    console.log("currentarticle", currentArticle);
 
  const currentSavedArticles =
    JSON.parse(localStorage.getItem("savedArticles")) || [];
   
    const isArticleAlreadySaved = currentSavedArticles.some((item) => item.id === articleId);


  if (!Array.isArray(currentArticle)) {
    console.error(" newsItems is not an array!", newsItems);
    return;
  }

  if (isArticleAlreadySaved) {
    console.log("This article is already saved.");
    return; 
  }

  if (!saved) {


     api

        .savedNews({ source, title, date, description, image })
        .then((updatedData) => {
          setNewsItems({
            ...newsItems,
            articles: [...currentArticle, updatedData],
          });
          setSavedArticles([...currentSavedArticles, updatedData]);
          localStorage.setItem(
            "savedArticles",
            JSON.stringify([...currentSavedArticles, updatedData])
          );
          console.log("saving was successfull", updatedData);
          console.log("currentsavedarticle",currentSavedArticles);
        })
        .catch((err) => console.log(err))
       }else{ api

        .removeNewsCardSved(articleId, token)
        .then(() => {
          const updatedSavedArticles = currentSavedArticles.filter(
            (item) => item._id !== articleId
          );
          setNewsItems({
            ...newsItems,
            articles: currentArticle.filter(
              (item) => item._id !== articleId
            ),
          });
          setSavedArticles(updatedSavedArticles);
          localStorage.setItem(
            "savedArticles",
            JSON.stringify(updatedSavedArticles)
          );
          console.log("delete complete");
        })
        .catch((err) => console.log(err));
      }
};