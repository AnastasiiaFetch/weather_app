import { ForecastData } from "../interfaces/interfaces";

const getDate = (): string => {
  let date = new Date();
  let now =
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);
  return now;
};

const showForecast = (forecast: ForecastData) => {
  let timeWeatherArray = forecast.forecastday[0].hour;
  let dayWeather = forecast.forecastday[0].day;
  let currentTime = getDate();
  let cards = "";

  timeWeatherArray.forEach((element) => {
    if (element.time.slice(-5) >= currentTime) {
      cards += `
      <div class="forecast_card">
        <div>
          Time: 
          <span>${element.time.slice(-5)}</span>
        </div>
        <div>
          Temperature: 
          <span>${element.temp_c}°C</span>
        </div>
        <div>
          <img src="${element.condition.icon}" alt="weather_icon">
        </div>
        <div>
          <span>${element.condition.text}</span>
        </div>
      </div>
      `;
    }
  });

  let html = `
  <div class="forecast_section_wrapper">
     <div class="forecast_section_header">
      <div>Max Temperature: 
        <span>${dayWeather.maxtemp_c}°C</span>
      </div>
      <div>Min Temperature: 
        <span>${dayWeather.mintemp_c}°C</span>
      </div>
      <div>Chances of Rain: 
        <span>${dayWeather.daily_chance_of_rain}%</span>
      </div>
    </div>
    <div class="forecast_section_cards">${cards}</div>
  </div>
  `;

  document.querySelector("#outputForecast")!.innerHTML = html;
};

export default showForecast;
