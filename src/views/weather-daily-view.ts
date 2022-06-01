import WeatherDailyList from "../models/weather-daily-list";
import WeatherDaily from "../models/weather-daily";
import { format } from "date-fns";

class WeatherDailyView {
  view: HTMLElement;

  constructor() {
    this.view = document.querySelector(".weather-daily-container")!;
  }

  makeDailyCard(weatherDaily: WeatherDaily): HTMLElement {
    const card = document.createElement("div");
    card.innerText = `
    Day: ${format(weatherDaily.time, "EEEE")}
    High: ${weatherDaily.tempHigh} °C
    Low: ${weatherDaily.tempLow} °C
    Weather condition: ${weatherDaily.weather.description}
    `;
    return card;
  }

  displayDailyInfo(weatherDailyList: WeatherDailyList) {
    weatherDailyList.weatherDailyList.forEach((weatherDaily) => {
      const card = this.makeDailyCard(weatherDaily);
      this.view.appendChild(card);
    });
  }
}

export default WeatherDailyView;
