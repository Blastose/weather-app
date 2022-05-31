import LocationParser from "./location-parser";
import { Geocoding } from "./openweather-api-interfaces";

class OpenWeatherApiWrapper {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getGeocodingInfo(location: string): Promise<Geocoding | undefined> {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${LocationParser.parseLocation(
          location
        )}&appid=${this.apiKey}`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error("Fetch response returned not ok");
      }
      console.log(response);
      const jsonData = await response.json();

      // The api call returns an array of possible geocoding results for the given location
      if (jsonData.length === 0) {
        throw new Error("Unable to locate location");
      }
      console.log(jsonData);
      return jsonData[0];
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  async getOneCallData(
    latitude: number,
    longitude: number
  ): Promise<object | undefined> {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error("Fetch response returned not ok");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
}

export default OpenWeatherApiWrapper;
