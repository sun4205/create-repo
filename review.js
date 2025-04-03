
const handleNewsSaved = (data) => {
  const token = localStorage.getItem("jwt");
  console.log("Received data in handleNewsSaved:", data);
  console.log("data.id:", data.data.id);

  const dataId = data.data.id;

  const { id, source, title, date, description, image } = data.data;

  const storedArticles =
    JSON.parse(localStorage.getItem("savedArticles")) || [];
  console.log("Stored articles:", storedArticles);

  const isDuplicate = storedArticles.some((article) => {
    console.log("Checking article:", article); 
    console.log("article.id:", article.id);   
    return article.id === dataId;
  });
  if (isDuplicate) {
    console.log("Article is already saved, skipping...");
    return;
  }

  const storedKeywords =
    JSON.parse(localStorage.getItem("savedKeywords")) || [];

  const updatedKeywords = storedKeywords.includes(query)
    ? storedKeywords
    : [...storedKeywords, query];
  localStorage.setItem("savedKeywords", JSON.stringify(updatedKeywords));
  setSavedArticles(updatedKeywords);
  console.log("Calling savedNews function...");
  api
    .savedNews({
      id,
      source,
      title,
      date,
      description,
      image,
      keywords: updatedKeywords,
    })
    .then((updatedData) => {
      console.log("savedNews API response:", updatedData);
      const newSavedArticles = [...storedArticles, updatedData];
      console.log("newsSavedArticles", newSavedArticles);

      localStorage.setItem("savedArticles", JSON.stringify(newSavedArticles));

      return setSavedArticles(newSavedArticles);
    })
    .catch(console.error);
};
const handleRemoveArticle = (id) => {
  console.log("Before deletion, savedArticles:", savedArticles);
  console.log("Clicked article ID:", id); 
  const token = localStorage.getItem("jwt");

  if (!Array.isArray(savedArticles)) return;

  api.removeNewsCardSaved(id, token)
      .then(() => {
          setSavedArticles((prevArticles) =>
              prevArticles.filter((article) => article.id !== id)
          );
      })
      .catch((err) => console.error("Failed to delete article:", err));
};


const handleSearchSubmit = (values) => {
  console.log("handleSearchSubmit called with:", values);
  if (values.query.length < 3) return;

  localStorage.setItem("query", values.query);
  asyncSubmit(() =>
    newsapi.getNewsCards(values.query).then((data) => {
      console.log("Fetched news data:", data);
      setNewsItems(data);
    })
  );
};
