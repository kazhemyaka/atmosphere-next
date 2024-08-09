interface WeatherData {
  location: {
    name: string;
    lat: number;
    lon: number;
    tz_id: string;
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
  forecast: {
    forecastday: [
      {
        date_epoch: number;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avgtemp_c: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          avghumidity: number;
          daily_will_it_rain: number;
          daily_chance_of_rain: string;
          daily_will_it_snow: number;
          daily_chance_of_snow: string;
          condition: {
            text: string;
            code: number;
          };
        };
        hour: [
          {
            time_epoch: number;
            temp_c: number;
            is_day: boolean;
            condition: {
              text: string;
              code: number;
            };
            wind_kph: number;
            wind_degree: number;
            wind_dir: string;
            pressure_mb: number;
            precip_mm: number;
            humidity: number;
            cloud: number;
            feelslike_c: number;
            dewpoint_c: number;
            uv: number;
          }
        ];
      }
    ];
  };
}

export default WeatherData;
