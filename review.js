const CurrentUserContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export default CurrentUserContext;

const handleToggleSwitchChange = () =>{
  setCurrentTemperatureUnit((prevUnit)=>(prevUnit==="F"?"c":"F"))
}

const {currentUser} = useContext(CurrentUserContext);
const username = currentUser?.name || "Anonymous";
const currentDate = new Date().toLocaleDateString("default",{
  month:"long",
  day:"number",
});
