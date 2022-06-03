import * as countries from "i18n-iso-countries";
// eslint-disable-next-line @typescript-eslint/no-var-requires
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

class LocationParser {
  static parseLocation(location: string): string {
    const locations = location.split(",");

    if (locations.length > 1) {
      const country = locations[1].trim();
      if (countries.isValid(country) && country.length === 2) {
        return location;
      }

      const code = countries.getAlpha2Code(locations[1].trim(), "EN");

      return `${locations[0].trim()},${code}`;
    }

    return location;
  }
}

export default LocationParser;
