import { MainData } from "../interfaces/interfaces";

const showInfo = ({ location, current }: MainData) => {
  const html = `
      <div class="main_info_wrapper">
        <div class="location_info_wrapper">
          <div class="location_title">City: <span>${location.name}</span></div>
          <div class="location_details">
            <p>Region: <span>${location.region}</span></p>
            <p>Country: <span>${location.country}</span></p>
            <p>Local Time: <span>${location.localtime}</span></p>
          </div>
        </div>

        <div class="condition_info_wrapper">
          <div class="condition_img">
            <img src="${current.condition.icon}" alt="weather_icon">
          </div>
          <div class="condition_desc">${current.condition.text}</div>
        </div>
      </div>

      <div class="detailed_info_wrapper">
        <p>Temperature: <span>${current.temp_c}°C</span></p>
        <p>Feels like: <span>${current.feelslike_c}°C</span></p>
        <p>Wind Speed: <span>${current.wind_mph} mph</span></p>
        <p>Cloud: <span>${current.cloud}%</span></p>
        <p>Humidity: <span>${current.humidity}%</span></p>
      </div>
    `;
  document.querySelector("#outputInfo")!.innerHTML = html;
};

export default showInfo;
