interface WeatherData {
  location: {
    name: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    cloud: number;
    precip_mm: number;
    humidity: number;
    dewpoint_c: number;
    pressure_mb: number;
    uv: number;
    condition: {
      text: string;
      code: number;
    };
    is_day: boolean;
  };
}

export default WeatherData;
