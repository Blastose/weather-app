interface Geocoding {
  name: string;
  local_names: {
    ascii: string;
    feature_name: string;
  };
  lon: string;
  lat: string;
  country: string;
  state?: string;
}

export { Geocoding };
