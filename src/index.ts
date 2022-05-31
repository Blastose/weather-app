import "./style.css";
import OpenWeatherApiWrapper from "./modals/openweather-api-wrapper";

const openWeatherApiWrapper = new OpenWeatherApiWrapper(
  "1adba23387b35ccba4bd08e59faec2cf"
);

async function get() {
  const asdf = await openWeatherApiWrapper.getGeocodingInfo("New york");
  console.log("asdf");
  if (asdf) {
    console.log(asdf.lon);
  }
}
get();

console.log(
  openWeatherApiWrapper
    .getGeocodingInfo("New york")
    .then((object) => console.log(object))
);

console.log(
  openWeatherApiWrapper
    .getOneCallData(49.2608724, -123.113952)
    .then((o) => console.log(o))
);
