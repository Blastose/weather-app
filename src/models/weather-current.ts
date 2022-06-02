import { Weather } from "./openweather-api-interfaces";

interface Location {
  city: string;
  country: string;
  state?: string;
}

class WeatherCurrent {
  time: Date;
  temp: number;
  humidity: number;
  windSpeed: number;
  weather: Weather;
  location: Location;

  onUpdate?: (weatherCurrent: WeatherCurrent) => void;

  constructor(
    time: Date,
    temp: number,
    humidity: number,
    windSpeed: number,
    weather: Weather,
    location: Location
  ) {
    this.time = time;
    this.temp = temp;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.weather = weather;
    this.location = location;
  }

  update(newWeatherCurrent: WeatherCurrent) {
    const updateFunction = this.onUpdate;
    Object.assign(this, newWeatherCurrent);
    this.onUpdate = updateFunction;

    if (this.onUpdate) {
      this.onUpdate(this);
    }
  }

  bindOnUpdate(callback: (weatherCurrent: WeatherCurrent) => void) {
    this.onUpdate = callback;
  }
}

export default WeatherCurrent;
