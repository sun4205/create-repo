export const getWeather = ({latitude,longitude},APIkey) => {
  return fetch(``).then(checkresponse)
}

export const getWeatherType = (temperature, currentTemperatureUnit) => {
  const temp = currentTemperatureUnit === "F" ? temperature.F: temperature.C;
  if(temp>86){
    return "hot"
  }else if(temp >=66 && temp<=86){
    return "warm";
  }else {
    return "cold";
  }
}

export const isDay = ({sunrise, sunset}) => {
  const now = Date.now();
  return sunrise * 1000 < now && now < sunset * 1000;
}

export const filterWeatherData = (data, currentTemperatureUnit) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F:data.main.temp,
    C:Math.round((data.main.temp-32)*5/9),
  }
  result.type = getWeatherType(result.temp, currentTemperatureUnit);
  result.condition = data.weather[0].main.toLowercase();
  result.isDay = isDay(data.sys);
  return result;
}