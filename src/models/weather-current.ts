import { Weather } from "./openweather-api-interfaces";

class WeatherCurrent {
  time: Date;
  temp: number;
  humidity: number;
  windSpeed: number;
  weather: Weather;

  onUpdate?: (weatherCurrent: WeatherCurrent) => void;

  constructor(
    time: Date,
    temp: number,
    humidity: number,
    windSpeed: number,
    weather: Weather
  ) {
    this.time = time;
    this.temp = temp;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.weather = weather;
  }

  update(newWeatherCurrent: WeatherCurrent) {
    this.time = newWeatherCurrent.time;
    this.temp = newWeatherCurrent.temp;
    this.humidity = newWeatherCurrent.humidity;
    this.windSpeed = newWeatherCurrent.windSpeed;
    this.weather = newWeatherCurrent.weather;

    if (this.onUpdate) {
      this.onUpdate(this);
    }
  }

  bindOnUpdate(callback: (weatherCurrent: WeatherCurrent) => void) {
    this.onUpdate = callback;
  }
}

export default WeatherCurrent;
