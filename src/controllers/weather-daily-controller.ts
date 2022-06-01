import WeatherDailyList from "../models/weather-daily-list";
import WeatherDailyView from "../views/weather-daily-view";

class WeatherDailyController {
  weatherDailyModel: WeatherDailyList;
  weatherDailyView: WeatherDailyView;

  constructor(
    weatherDailyModel: WeatherDailyList,
    weatherDailyView: WeatherDailyView
  ) {
    this.weatherDailyModel = weatherDailyModel;
    this.weatherDailyView = weatherDailyView;
  }
}

export default WeatherDailyController;
