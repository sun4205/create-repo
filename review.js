export const weatherOptions = [
  {
    day: true,
    condition: "sunny",
    url: new URL("../assets/day/sunny.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/cloudy.svg", import.meta.url).href,
  },
]

export const defaultWeatherOpions = {
  day:{
    day: true,
    condition: "clear",
    url: new URL("../assets/day/default.svg", import.meta.url).href,
  },
  night:{
    day: false,
    condition: "clear",
    url: new URL("../assets/night/night_default.svg", import.meta.url).href,
  }
}

export const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.Fit24.jumpingcrab.com"
  : "http://localhost:3001";

function checkResponse(res){
  return res.ok? res.json() :Promise.reject(`Error:${res.status}`);
}

function request(url,options){
  return fetch(url,options).then(checkResponse);
}

function getItem(){
  return request(`${baseUrl}/item`);
}

const addItem = ({ name, weather, imageUrl }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  });
};

