import WeatherCurrent from "../models/weather-current";

class WeatherCurrentView {
  view: HTMLElement;

  constructor() {
    this.view = document.querySelector(".weather-current-container")!;
  }

  displayWeatherInfo(weatherCurrent: WeatherCurrent) {
    this.view.innerText = `
    Location: ${weatherCurrent.location.city}, ${
      weatherCurrent.location.state ? weatherCurrent.location.state : ""
    } ${weatherCurrent.location.country}
    Temp: ${weatherCurrent.temp} °C
    Humidity: ${weatherCurrent.humidity}%
    Weather condtion: ${weatherCurrent.weather.description}
    Wind speed: ${weatherCurrent.windSpeed * 3.6} km/h
    Date: ${weatherCurrent.time.toString()}
    `;
  }
}

export default WeatherCurrentView;
