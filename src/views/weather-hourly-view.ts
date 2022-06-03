import { format } from "date-fns";
import WeatherHourly from "../models/weather-hourly";
import WeatherHourlyList from "../models/weather-hourly-list";
import DOMManipulation from "../models/dom-manipulation";

class WeatherHourlyView {
  content: HTMLElement;
  sectionText: HTMLElement;

  constructor() {
    this.content = document.querySelector(".weather-hourly-content")!;
    this.sectionText = document.querySelector(
      ".weather-hourly-container > .section-text"
    )!;
  }

  makeHourlyCard(weatherHourly: WeatherHourly): HTMLElement {
    const card = DOMManipulation.createElementWithClass(
      "div",
      "weather-hourly-card"
    );
    const hourText = DOMManipulation.createElementWithClass("div", "hour-text");
    hourText.textContent = `${format(weatherHourly.time, "p")}`;
    const img = DOMManipulation.createElementWithClass("img", "img-hourly");
    img.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weatherHourly.weather.icon}@2x.png`
    );
    const temp = DOMManipulation.createElementWithClass("div", "temp");
    temp.textContent = `${Math.round(weatherHourly.temp)} °C`;
    const weatherState = DOMManipulation.createElementWithClass(
      "div",
      "hourly-weather-state"
    );
    weatherState.textContent = `${weatherHourly.weather.description}`;

    card.appendChild(hourText);
    card.appendChild(temp);
    card.appendChild(weatherState);
    card.appendChild(img);
    return card;
  }

  clearView() {
    this.content.replaceChildren();
  }

  displayDailyInfo(weatherHourlyList: WeatherHourlyList) {
    this.clearView();
    this.sectionText.textContent = "Hourly";

    for (let i = 0; i < 24; i++) {
      const weatherHourly = weatherHourlyList.weatherHourlyList[i];
      const card = this.makeHourlyCard(weatherHourly);
      this.content.appendChild(card);
    }
  }
}

export default WeatherHourlyView;
