import WeatherHourly from "./weather-hourly";

class WeatherHourlyList {
  weatherHourlyList: WeatherHourly[];

  onUpdate?: (weatherHourlyList: WeatherHourlyList) => void;

  constructor() {
    this.weatherHourlyList = [] as WeatherHourly[];
  }

  clearList() {
    while (this.weatherHourlyList.length > 0) {
      this.weatherHourlyList.pop();
    }
  }

  update(weatherHourlyList: WeatherHourly[]) {
    this.clearList();
    weatherHourlyList.forEach((item) => {
      this.weatherHourlyList.push(item);
    });

    if (this.onUpdate) {
      this.onUpdate(this);
    }
  }

  bindOnUpdate(callback: (weatherHourlyList: WeatherHourlyList) => void) {
    this.onUpdate = callback;
  }
}

export default WeatherHourlyList;
