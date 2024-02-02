import { DateTime } from "luxon";

// GET http://api.openweathermap.org/data/2.5/timezone?lat={LATITUDE}&lon={LONGITUDE}&appid={API_KEY}

const API_KEY = "2b8a69f2bdfa51f505322ee720addec7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // console.log(url);
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
   
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    timezone,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  // console.log(timezone);
 
  
 
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    timezone
  };
   
 
};



  

  // return {daily};

// formatForecastWeather();
const getFormattedWeatherData = async (searchParams) => {
 

  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

 


  

  


  

  


  return { ...formattedCurrentWeather };

  
};

const formatToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;





  export default getFormattedWeatherData;

export { formatToLocalTime,iconUrlFromCode };


