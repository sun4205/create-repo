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

const addItem = ({name,weather,imageUrl})=>{
  return request(`${baseUrl}/item`,{
    method:"POST",
    headers:{
      "Content-type":"application/json",
      authorization:`Bearer ${token}`,
    },
    body:JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  });
};

const updatedUserData = (username,avatar)=>{
  const token = localStorage.getItem("jwt");
  if(!token) return;
  if(!username || !avatar) return;
  return fetch(`${baseUrl}/users/me`,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json",
      authorization:`Bearer${token}`,
    },
    body:JSON.stringify({name:username, avatar:avatar||""}),
  })
  .then((res)=>{
    if(!res.ok){
      throw new Error(`failed to updated user data`)
    }
    return res.json();
  }
  )
  .catch((error)=>console.error(error.messge))
}

const addCardLike = (id,token)=>{
  return fetch(`${baseUrl}/items/${id}/likes`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      authorization:`Bearer ${token}`,
    }    
  })
  .then((res)=>res.json())
    .catch((err)=>console.log(err))
};

const removeCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`,{
    method:"DELETE",
    haeders:{
      "Content-Type":"application/json",
      authorization:`Bearer ${token}`,
    }
  })
  .then((res)=>res.json())
  .catch((err)=>console.log(err))
};
