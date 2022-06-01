import OpenWeatherApiWrapper from "../models/openweather-api-wrapper";
import LocationInputView from "../views/weather-location-input-view";
import WeatherCurrentController from "./weather-current-controller";
import { fromUnixTime } from "date-fns";
import WeatherCurrent from "../models/weather-current";
import { OneCall } from "../models/openweather-api-interfaces";

class WeatherAppController {
  openWeatherApiWrapper: OpenWeatherApiWrapper;
  weatherCurrentController: WeatherCurrentController;
  locationInputView: LocationInputView;

  constructor(
    openWeatherApiWrapper: OpenWeatherApiWrapper,
    weatherCurrentController: WeatherCurrentController,
    locationInputView: LocationInputView
  ) {
    this.openWeatherApiWrapper = openWeatherApiWrapper;
    this.weatherCurrentController = weatherCurrentController;
    this.locationInputView = locationInputView;
  }

  setup() {
    this.locationInputView.bindSearch(this.setAll.bind(this));

    this.weatherCurrentController.weatherCurrentModel.bindOnUpdate(
      this.weatherCurrentController.weatherCurrentView.displayWeatherInfo.bind(
        this.weatherCurrentController.weatherCurrentView
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
}

export default WeatherAppController;
