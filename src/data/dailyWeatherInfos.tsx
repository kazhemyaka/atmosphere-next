import { FaWind, FaCloudShowersHeavy, FaDroplet, FaSun } from "react-icons/fa6";
import WeatherData from "@/types/WeatherData";

const dailyWeatherInfos = (
  weatherData: WeatherData["forecast"]["forecastday"][0]["day"]
) => [
  {
    icon: <FaWind />,
    desc: "Max wind",
    value: `${weatherData.maxwind_kph} km/h`,
  },
  {
    icon: <FaCloudShowersHeavy />,
    desc: "Total precipitation",
    value: `${weatherData.totalprecip_mm} mm`,
  },
  {
    icon: <FaDroplet />,
    desc: "Avg humidity",
    value: `${weatherData.avghumidity}%`,
  },
  {
    icon: <FaSun />,
    desc: "UV index",
    value: `${weatherData.uv}`,
  },
];

export default dailyWeatherInfos;
