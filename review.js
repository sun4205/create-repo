const handleAddClick = () =>{
  setActiveModal("add-garment");
}

const changeCurrentUserData =(username, avatar) =>{
  setActiveModal("edit-profile");
}

const openRegisterModal = () => {
  setActiveModal("register");
}

const openLoginModal = () => {
  setActiveModal("login");
}

const closeActiveModal = () => {
  setActiveModal("");
}

const handleToggleSwitchChange = () => {
  setCurrentTemperatureUnit((prevUnit)=>(prevUnit==="F"?"C":"F"));
}

function asyncSubmit(request) {
  setIsLoading(true);
  request()
    .then(closeActiveModal)

    .catch(console.error)

    .finally(() => setIsLoading(false));
}
const handleAddItemSubmit = (item) => {
  console.log("handleAddItemSubmit called with item:", item);
  asyncSubmit(() =>
    addItem(item).then((newItem) => {
      console.log("Current clothingItems before update:", clothingItems);
      setClothingItems([newItem, ...clothingItems]);
    })
  );
};

function getUserInformation(token) {
  return auth
    .getUserInfo(token)
    .then((user) => {
      setIsLoggedIn(true);
      setCurrentUser(user);
    })
    .catch(console.error);
}

const handleLogin = ({ username, password }) => {
  if (!username || !password) {
    return;
  }

  auth
    .authorize(username, password)
    .then((data) => {
      if (data.token) {
        setToken(data.token);
        setIsLoggedIn(true);
        getUserInformation(data.token).then(() => {
          const redirectPath = location.state?.from?.pathname || "/";
          navigate(redirectPath);
          closeActiveModal();
        });
      }
    })
    .catch(console.error);
};


useEffect = (()=>{
  const jwt = getToken();
  if(!jwt){
    setCurrentUser(null);
    setIsLoggedIn(false);
    return;
  }

  getUserInformation(jwt);
},[]);

const handleLogOut = () => {
  console.log("Log Out button clicked.");
  removeToken();
  setIsLoggedIn(false);
  setCurrentUser(null);
  navigate("/");
  console.log("User logged out successfully.");
};

