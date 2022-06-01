import { format } from "date-fns";
import WeatherHourly from "../models/weather-hourly";
import WeatherHourlyList from "../models/weather-hourly-list";

class WeatherHourlyView {
  view: HTMLElement;

  constructor() {
    this.view = document.querySelector(".weather-hourly-container")!;
  }

  makeHourlyCard(weatherHourly: WeatherHourly): HTMLElement {
    const card = document.createElement("div");
    card.innerText = `
    Day: ${format(weatherHourly.time, "p")}
    Temp: ${weatherHourly.temp} °C
    Weather condition: ${weatherHourly.weather.description}
    `;
    return card;
  }

  clearView() {
    this.view.replaceChildren();
  }

  displayDailyInfo(weatherHourlyList: WeatherHourlyList) {
    this.clearView();
    weatherHourlyList.weatherHourlyList.forEach((weatherHourly) => {
      const card = this.makeHourlyCard(weatherHourly);
      this.view.appendChild(card);
    });
  }
}

export default WeatherHourlyView;
