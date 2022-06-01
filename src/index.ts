import "./style.css";
import OpenWeatherApiWrapper from "./models/openweather-api-wrapper";
import WeatherAppController from "./controllers/weather-app-controller";
import WeatherCurrentController from "./controllers/weather-current-controller";
import WeatherCurrent from "./models/weather-current";
import WeatherCurrentView from "./views/weather-current-view";
import LocationInputView from "./views/weather-location-input-view";

const openWeatherApiWrapper = new OpenWeatherApiWrapper(
  "1adba23387b35ccba4bd08e59faec2cf"
);

const weatherCurrentModel = new WeatherCurrent(new Date(), 1, 1, 1, {
  id: 1,
  main: "string",
  description: "string",
  icon: "string",
});
const weatherCurrentView = new WeatherCurrentView();
const weatherCurrentController = new WeatherCurrentController(
  weatherCurrentModel,
  weatherCurrentView
);

const locationInputView = new LocationInputView();

const weatherAppController = new WeatherAppController(
  openWeatherApiWrapper,
  weatherCurrentController,
  locationInputView
);
weatherAppController.setup();
