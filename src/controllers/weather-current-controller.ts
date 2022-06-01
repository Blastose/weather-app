import WeatherCurrent from "../models/weather-current";
import WeatherCurrentView from "../views/weather-current-view";

class WeatherCurrentController {
  weatherCurrentModel: WeatherCurrent;
  weatherCurrentView: WeatherCurrentView;

  constructor(
    weatherCurrentModel: WeatherCurrent,
    weatherCurrentView: WeatherCurrentView
  ) {
    this.weatherCurrentModel = weatherCurrentModel;
    this.weatherCurrentView = weatherCurrentView;
  }
}

export default WeatherCurrentController;
