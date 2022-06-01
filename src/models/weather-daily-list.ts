import WeatherDaily from "./weather-daily";

class WeatherDailyList {
  weatherDailyList: WeatherDaily[];

  onUpdate?: (weatherDailyList: WeatherDailyList) => void;

  constructor() {
    this.weatherDailyList = [] as WeatherDaily[];
  }

  clearList() {
    while (this.weatherDailyList.length > 0) {
      this.weatherDailyList.pop();
    }
  }

  update(weatherDailyList: WeatherDaily[]) {
    this.clearList();
    weatherDailyList.forEach((item) => {
      this.weatherDailyList.push(item);
    });

    if (this.onUpdate) {
      this.onUpdate(this);
    }
  }

  bindOnUpdate(callback: (weatherDailyList: WeatherDailyList) => void) {
    this.onUpdate = callback;
  }
}

export default WeatherDailyList;
