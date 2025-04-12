
const handleLogin = ({ email, password }) => {
  if (!email || !password) {
    return;
  }

  auth
    .authorize(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        setJwt(data.token);
        setIsLoggedIn(true);
        console.log("Login successful!");

        auth
          .getUserInfo(data.token)
          .then((userInfo) => {
            setCurrentUser(userInfo);
            console.log("User info updated:", userInfo);
          })
          .catch(console.error);
      }
    })
    .catch(console.error);
};

const handleLogOut = () => {
  token.removeToken();
  setIsLoggedIn(false);
  setCurrentUser(null);
  setJwt(null);
  navigate("/");
  console.log("User logged out successfully.");
};

const handleNewsSaved = (data) => {
  if (!jwt) {
    console.log("No token found, user is not logged in.");
    return;
  }

  const { id, source, title, date, description, image, keywords } = data.data;

  api
    .savedNews({
      id,
      source,
      title,
      date,
      description,
      image,
      token: jwt,
      keywords,
    })
    .then((response) => {
      console.log("savedNews API response:", response);
    })
    .catch((error) => {
      console.error("Error calling savedNews API:", error);
    });
};

const handleRemoveArticle = (id) => {
  const token = localStorage.getItem("jwt");

  api
    .removeNewsCardSaved(id, token)
    .then(() => {
      setSavedArticles((prevArticles) =>
        prevArticles.filter((article) => article.id !== id)
      );
    })
    .catch((err) => console.error("Failed to delete article:", err));
};

const debouncedFetch = useMemo(() => {
  return debounce((searchTerm) => {
    setIsLoading(true);
    newsapi.getNewsCards(searchTerm).then((data) => {
      setNewsItems(data);
      setIsSearched(true);
      setIsLoading(false);
    });
  }, 1000);
}, []);

const handleRegisterSubmit = ({ email, password, username }) => {
  return auth.register(email, password, username);
};

useEffect(() => {
  if (!jwt) {
    setCurrentUser(null);
    setIsLoggedIn(false);
    return;
  }

  setIsLoading(true);

  Promise.all([auth.getUserInfo(jwt), api.getSavedNews({ token: jwt })])
    .then(([userInfo, savedArticles]) => {
      setCurrentUser(userInfo);
      setIsLoggedIn(true);
      setSavedArticles(savedArticles);
    })
    .catch(console.error)
    .finally(() => setIsLoading(false));
}, [jwt]);
