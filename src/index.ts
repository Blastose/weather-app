import "./style.css";
import OpenWeatherApiWrapper from "./models/openweather-api-wrapper";
import WeatherAppController from "./controllers/weather-app-controller";
import WeatherCurrentController from "./controllers/weather-current-controller";
import WeatherCurrent from "./models/weather-current";
import WeatherCurrentView from "./views/weather-current-view";
import LocationInputView from "./views/weather-location-input-view";
import WeatherDailyList from "./models/weather-daily-list";
import WeatherDailyView from "./views/weather-daily-view";
import WeatherDailyController from "./controllers/weather-daily-controller";
import WeatherHourlyController from "./controllers/weather-hourly-controller";
import WeatherHourlyList from "./models/weather-hourly-list";
import WeatherHourlyView from "./views/weather-hourly-view";

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

const weatherDailyListModel = new WeatherDailyList();
const weatherDailyView = new WeatherDailyView();
const weatherDailyController = new WeatherDailyController(
  weatherDailyListModel,
  weatherDailyView
);

const weatherHourlyListModel = new WeatherHourlyList();
const weatherHourlyView = new WeatherHourlyView();
const weatherHourlyController = new WeatherHourlyController(
  weatherHourlyListModel,
  weatherHourlyView
);

const weatherAppController = new WeatherAppController(
  openWeatherApiWrapper,
  weatherCurrentController,
  locationInputView,
  weatherDailyController,
  weatherHourlyController
);
weatherAppController.setup();
