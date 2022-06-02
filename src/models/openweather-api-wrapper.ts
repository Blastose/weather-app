import LocationParser from "./location-parser";
import { Geocoding, OneCall } from "./openweather-api-interfaces";

class OpenWeatherApiWrapper {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Returns the first result from OpenWeatherMap's Direct Geocoding API with the given location
   *
   * @param location
   * @returns The first result of the api call to OpenWeatherMap's Geocoding API or undefined if the call failed or returns nothing
   */
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
      const jsonData = await response.json();

      // The api call returns an array of possible geocoding results for the given location
      if (jsonData.length === 0) {
        throw new Error("Unable to locate location");
      }
      return jsonData[0];
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  async getOneCallData(
    latitude: number,
    longitude: number
  ): Promise<OneCall | undefined> {
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
