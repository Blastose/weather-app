import WeatherDailyList from "../models/weather-daily-list";
import WeatherDaily from "../models/weather-daily";
import { format } from "date-fns";
import DOMManipulation from "../models/dom-manipulation";

class WeatherDailyView {
  content: HTMLElement;
  sectionText: HTMLElement;

  constructor() {
    this.content = document.querySelector(".weather-daily-content")!;
    this.sectionText = document.querySelector(
      ".weather-daily-container > .section-text"
    )!;
  }

  makeDailyCard(weatherDaily: WeatherDaily): HTMLElement {
    const card = DOMManipulation.createElementWithClass(
      "div",
      "weather-daily-card"
    );
    const dayText = DOMManipulation.createElementWithClass("div", "day-text");
    dayText.textContent = `${format(weatherDaily.time, "EEEE")}`;
    const img = DOMManipulation.createElementWithClass("img", "img-daily");
    img.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weatherDaily.weather.icon}@2x.png`
    );
    const tempHigh = DOMManipulation.createElementWithClass("div", "temp-high");
    tempHigh.textContent = `${Math.round(weatherDaily.tempHigh)} °C`;
    const tempLow = DOMManipulation.createElementWithClass("div", "temp-low");
    tempLow.textContent = `${Math.round(weatherDaily.tempLow)} °C`;

    card.appendChild(dayText);
    card.appendChild(img);
    card.appendChild(tempHigh);
    card.appendChild(tempLow);

    return card;
  }

  clearContent() {
    this.content.replaceChildren();
  }

  displayDailyInfo(weatherDailyList: WeatherDailyList) {
    this.clearContent();
    this.sectionText.textContent = "Daily";
    weatherDailyList.weatherDailyList.forEach((weatherDaily) => {
      const card = this.makeDailyCard(weatherDaily);
      this.content.appendChild(card);
    });
  }
}

export default WeatherDailyView;
