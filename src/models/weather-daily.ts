import { Weather } from "./openweather-api-interfaces";

class WeatherDaily {
  time: Date;
  temp: number;
  tempHigh: number;
  tempLow: number;
  weather: Weather;

  constructor(
    time: Date,
    temp: number,
    tempHigh: number,
    tempLow: number,
    weather: Weather
  ) {
    this.time = time;
    this.temp = temp;
    this.tempHigh = tempHigh;
    this.tempLow = tempLow;
    this.weather = weather;
  }
}

export default WeatherDaily;
