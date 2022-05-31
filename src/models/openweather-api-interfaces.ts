interface Geocoding {
  name: string;
  local_names: {
    ascii: string;
    feature_name: string;
  };
  lon: number;
  lat: number;
  country: string;
  state?: string;
}

interface OneCall {
  lat: number;
  long: number;
  timezone: string;
  timezone_offset: number;

  current: Current;
  hourly: Hourly[];
  minutely?: Minutely[];
  daily: Daily[];
  alerts?: Alerts[];
}

interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;

  weather: Weather[];
  rain: Rain;
  snow: Snow;
}

interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  pop: number;
  rain: Rain;
  snow: Snow;
  weather: Weather[];
}

interface Minutely {
  dt: number;
  precipitation: number;
}

interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  pop: number;
  weather: Weather[];
  rain?: number;
  snow?: number;
}

interface Temp {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
}

interface FeelsLike {
  morn: number;
  day: number;
  eve: number;
  night: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Rain {
  "1h"?: number;
}

interface Snow {
  "1h"?: number;
}

interface Alerts {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

export { Geocoding, OneCall, Weather };
