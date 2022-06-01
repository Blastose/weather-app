import WeatherHourlyList from "../models/weather-hourly-list";
import WeatherHourlyView from "../views/weather-hourly-view";

class WeatherHourlyController {
  weatherHourlyModel: WeatherHourlyList;
  weatherHourlyView: WeatherHourlyView;

  constructor(
    weatherHourlyModel: WeatherHourlyList,
    weatherHourlyView: WeatherHourlyView
  ) {
    this.weatherHourlyModel = weatherHourlyModel;
    this.weatherHourlyView = weatherHourlyView;
  }
}

export default WeatherHourlyController;
