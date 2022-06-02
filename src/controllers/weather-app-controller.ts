import OpenWeatherApiWrapper from "../models/openweather-api-wrapper";
import LocationInputView from "../views/weather-location-input-view";
import WeatherCurrentController from "./weather-current-controller";
import { fromUnixTime } from "date-fns";
import WeatherCurrent from "../models/weather-current";
import {
  OneCall,
  Daily,
  Hourly,
  Geocoding,
} from "../models/openweather-api-interfaces";
import WeatherDailyController from "./weather-daily-controller";
import WeatherDaily from "../models/weather-daily";
import WeatherHourlyController from "./weather-hourly-controller";
import WeatherHourly from "../models/weather-hourly";

class WeatherAppController {
  openWeatherApiWrapper: OpenWeatherApiWrapper;
  weatherCurrentController: WeatherCurrentController;
  locationInputView: LocationInputView;
  weatherDailyController: WeatherDailyController;
  weatherHourlyController: WeatherHourlyController;

  constructor(
    openWeatherApiWrapper: OpenWeatherApiWrapper,
    weatherCurrentController: WeatherCurrentController,
    locationInputView: LocationInputView,
    weatherDailyController: WeatherDailyController,
    weatherHourlyController: WeatherHourlyController
  ) {
    this.openWeatherApiWrapper = openWeatherApiWrapper;
    this.weatherCurrentController = weatherCurrentController;
    this.locationInputView = locationInputView;
    this.weatherDailyController = weatherDailyController;
    this.weatherHourlyController = weatherHourlyController;
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

    this.weatherHourlyController.weatherHourlyModel.bindOnUpdate(
      this.weatherHourlyController.weatherHourlyView.displayDailyInfo.bind(
        this.weatherHourlyController.weatherHourlyView
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
        this.setCurrentWeatherInfo(geocoding, weatherData);
        this.setDailyWeatherInfo(weatherData);
        this.setHourlyWeatherInfo(weatherData);
      }
    }
  }

  async setCurrentWeatherInfo(geocoding: Geocoding, weatherData: OneCall) {
    this.weatherCurrentController.weatherCurrentModel.update(
      new WeatherCurrent(
        fromUnixTime(weatherData.current.dt),
        weatherData.current.temp,
        weatherData.current.humidity,
        weatherData.current.wind_speed,
        weatherData.current.weather[0],
        {
          city: geocoding.name,
          country: geocoding.country,
          state: geocoding.state,
        }
      )
    );
  }

  async setDailyWeatherInfo(weatherData: OneCall) {
    this.weatherDailyController.weatherDailyModel.update(
      this.createWeatherDailyList(weatherData.daily)
    );
  }

  async setHourlyWeatherInfo(weatherData: OneCall) {
    this.weatherHourlyController.weatherHourlyModel.update(
      this.createWeatherHourlyList(weatherData.hourly)
    );
  }

  createWeatherDailyList(data: Daily[]) {
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

  createWeatherHourlyList(data: Hourly[]) {
    const list = [] as WeatherHourly[];
    data.forEach((item) => {
      list.push(
        new WeatherHourly(fromUnixTime(item.dt), item.temp, item.weather[0])
      );
    });
    return list;
  }
}

export default WeatherAppController;
