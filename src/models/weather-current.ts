import { Weather } from "./openweather-api-interfaces";

class WeatherCurrent {
  time: Date;
  temp: number;
  humidity: number;
  windSpeed: number;
  weather: Weather;

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
}

export default WeatherCurrent;
