import { Weather } from "./openweather-api-interfaces";

class WeatherHourly {
  time: Date;
  temp: number;
  weather: Weather;

  constructor(time: Date, temp: number, weather: Weather) {
    this.time = time;
    this.temp = temp;
    this.weather = weather;
  }
}

export default WeatherHourly;
