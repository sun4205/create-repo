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