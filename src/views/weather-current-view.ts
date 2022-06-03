import WeatherCurrent from "../models/weather-current";
import DOMManipulation from "../models/dom-manipulation";
import { format } from "date-fns";

class WeatherCurrentView {
  view: HTMLElement;

  constructor() {
    this.view = document.querySelector(".weather-current-container")!;
  }

  clearView() {
    this.view.replaceChildren();
  }

  displayWeatherInfo(weatherCurrent: WeatherCurrent) {
    this.clearView();

    const content = DOMManipulation.createElementWithClass(
      "div",
      "weather-current-content"
    );

    const info = DOMManipulation.createElementWithClass(
      "div",
      "weather-current-info"
    );

    const locationText = DOMManipulation.createElementWithClass(
      "div",
      "location-text"
    );
    const cityText = DOMManipulation.createElementWithClass("div", "city-text");
    const countryText = DOMManipulation.createElementWithClass(
      "div",
      "country-text"
    );
    cityText.textContent = `${weatherCurrent.location.city}, ${weatherCurrent.location.state}`;
    countryText.textContent = `${weatherCurrent.location.country}`;
    locationText.appendChild(cityText);
    locationText.appendChild(countryText);

    const currentTime = DOMManipulation.createElementWithClass(
      "div",
      "current-time"
    );
    currentTime.textContent = `${format(
      weatherCurrent.time,
      "MMMM do, iiii, p"
    )}`;
    const currentWeatherState = DOMManipulation.createElementWithClass(
      "div",
      "current-weather-state"
    );
    currentWeatherState.textContent = `${weatherCurrent.weather.description}`;

    info.appendChild(locationText);
    info.appendChild(currentTime);
    info.appendChild(currentWeatherState);

    content.appendChild(info);

    const stats = DOMManipulation.createElementWithClass(
      "div",
      "weather-current-stats"
    );
    const currentTemp = DOMManipulation.createElementWithClass(
      "div",
      "current-temp"
    );
    const imgCurrent = DOMManipulation.createElementWithClass(
      "img",
      "current-temp-img"
    );
    currentTemp.textContent = `${Math.round(weatherCurrent.temp)} °C`;
    imgCurrent.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weatherCurrent.weather.icon}@2x.png`
    );
    stats.appendChild(currentTemp);
    stats.appendChild(imgCurrent);

    content.appendChild(stats);

    this.view.appendChild(content);
  }
}

export default WeatherCurrentView;
