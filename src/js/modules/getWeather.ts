import axios from 'axios'
import { WeatherData } from '../interfaces/interfaces';

const weatherApiKey: string = "d116a07df720471cb11111225231204";

async function getWeather(city: string) {
  const request = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&days=1&aqi=no&alerts=no`;
  try {
    const response: WeatherData = await axios.get(request);
    return response.data;
  } catch (error) {
    if (error.response) {
      alert(error.response.data.error.message);
    }
  }
}

export default getWeather