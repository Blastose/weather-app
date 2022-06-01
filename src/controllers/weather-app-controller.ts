import OpenWeatherApiWrapper from "../models/openweather-api-wrapper";
import LocationInputView from "../views/weather-location-input-view";
import WeatherCurrentController from "./weather-current-controller";
import { fromUnixTime } from "date-fns";
import WeatherCurrent from "../models/weather-current";
import { OneCall, Daily } from "../models/openweather-api-interfaces";
import WeatherDailyController from "./weather-daily-controller";
import WeatherDaily from "../models/weather-daily";

class WeatherAppController {
  openWeatherApiWrapper: OpenWeatherApiWrapper;
  weatherCurrentController: WeatherCurrentController;
  locationInputView: LocationInputView;
  weatherDailyController: WeatherDailyController;

  constructor(
    openWeatherApiWrapper: OpenWeatherApiWrapper,
    weatherCurrentController: WeatherCurrentController,
    locationInputView: LocationInputView,
    weatherDailyController: WeatherDailyController
  ) {
    this.openWeatherApiWrapper = openWeatherApiWrapper;
    this.weatherCurrentController = weatherCurrentController;
    this.locationInputView = locationInputView;
    this.weatherDailyController = weatherDailyController;
  }

  setup() {
    this.locationInputView.bindSearch(this.setAll.bind(this));

    this.weatherCurrentController.weatherCurrentModel.bindOnUpdate(
      this.weatherCurrentController.weatherCurrentView.displayWeatherInfo.bind(
        this.weatherCurrentController.weatherCurrentView
      )
    );

    this.weatherDailyController.weatherDailyModel.bindOnUpdate(
      this.weatherDailyController.weatherDailyView.displayDailyInfo.bind(
        this.weatherDailyController.weatherDailyView
      )
    );
  }

  async setAll(location: string) {
    const geocoding = await this.openWeatherApiWrapper.getGeocodingInfo(
      location
    );
    if (geocoding) {
      console.log(geocoding);
      const weatherData = await this.openWeatherApiWrapper.getOneCallData(
        geocoding.lat,
        geocoding.lon
      );
      if (weatherData) {
        console.log(weatherData);
        this.setCurrentWeatherInfo(weatherData);
        this.setDailyWeatherInfo(weatherData);
      }
    }
  }

  // TODO Change to take param of OneCall
  async setCurrentWeatherInfo(weatherData: OneCall) {
    this.weatherCurrentController.weatherCurrentModel.update(
      new WeatherCurrent(
        fromUnixTime(weatherData.current.dt),
        weatherData.current.temp,
        weatherData.current.humidity,
        weatherData.current.wind_speed,
        weatherData.current.weather[0]
      )
    );
  }

  async setDailyWeatherInfo(weatherData: OneCall) {
    this.weatherDailyController.weatherDailyModel.update(
      this.createWeatherDailyListFromData(weatherData.daily)
    );
  }

  createWeatherDailyListFromData(data: Daily[]) {
    const list = [] as WeatherDaily[];
    data.forEach((item) => {
      list.push(
        new WeatherDaily(
          fromUnixTime(item.dt),
          item.temp.max,
          item.temp.min,
          item.weather[0]
        )
      );
    });
    return list;
  }
}

export default WeatherAppController;
