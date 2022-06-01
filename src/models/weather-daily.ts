import { Weather } from "./openweather-api-interfaces";

class WeatherDaily {
  time: Date;
  tempHigh: number;
  tempLow: number;
  weather: Weather;

  constructor(time: Date, tempHigh: number, tempLow: number, weather: Weather) {
    this.time = time;
    this.tempHigh = tempHigh;
    this.tempLow = tempLow;
    this.weather = weather;
  }
}

export default WeatherDaily;
