import axios from 'axios';

const API_KEY = 'ecee05806481c7d869e3831794d9328e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
