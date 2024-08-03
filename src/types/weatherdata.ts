interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
}

export default WeatherData;
