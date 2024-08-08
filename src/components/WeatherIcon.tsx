import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiSleet,
  WiRainMix,
  WiStormShowers,
} from "weather-icons-react";
import { FC, ComponentType } from "react";

interface WeatherIconMapProps {
  [key: number]: {
    day: ComponentType<{ size: number; color: string }>;
    night: ComponentType<{ size: number; color: string }>;
  };
}

const weatherIconMap: WeatherIconMapProps = {
  1000: { day: WiDaySunny, night: WiNightClear },
  1003: { day: WiDayCloudy, night: WiNightAltCloudy },
  1006: { day: WiCloudy, night: WiCloudy },
  1009: { day: WiCloud, night: WiCloud },
  1030: { day: WiFog, night: WiFog },
  1063: { day: WiShowers, night: WiShowers },
  1066: { day: WiSnow, night: WiSnow },
  1069: { day: WiSleet, night: WiSleet },
  1072: { day: WiRainMix, night: WiRainMix },
  1087: { day: WiStormShowers, night: WiStormShowers },
  1114: { day: WiSnow, night: WiSnow },
  1117: { day: WiSnow, night: WiSnow },
  1135: { day: WiFog, night: WiFog },
  1147: { day: WiFog, night: WiFog },
  1150: { day: WiShowers, night: WiShowers },
  1153: { day: WiShowers, night: WiShowers },
  1168: { day: WiRainMix, night: WiRainMix },
  1171: { day: WiRainMix, night: WiRainMix },
  1180: { day: WiDayRain, night: WiNightAltRain },
  1183: { day: WiDayRain, night: WiNightAltRain },
  1186: { day: WiDayRain, night: WiNightAltRain },
  1189: { day: WiDayRain, night: WiNightAltRain },
  1192: { day: WiDayRain, night: WiNightAltRain },
  1195: { day: WiDayRain, night: WiNightAltRain },
  1198: { day: WiRainMix, night: WiRainMix },
  1201: { day: WiRainMix, night: WiRainMix },
  1204: { day: WiSleet, night: WiSleet },
  1207: { day: WiSleet, night: WiSleet },
  1210: { day: WiSnow, night: WiSnow },
  1213: { day: WiSnow, night: WiSnow },
  1216: { day: WiSnow, night: WiSnow },
  1219: { day: WiSnow, night: WiSnow },
  1222: { day: WiSnow, night: WiSnow },
  1225: { day: WiSnow, night: WiSnow },
  1237: { day: WiSnow, night: WiSnow },
  1240: { day: WiShowers, night: WiShowers },
  1243: { day: WiDayRain, night: WiNightAltRain },
  1246: { day: WiDayRain, night: WiNightAltRain },
  1249: { day: WiSleet, night: WiSleet },
  1252: { day: WiSleet, night: WiSleet },
  1255: { day: WiSnow, night: WiSnow },
  1258: { day: WiSnow, night: WiSnow },
  1261: { day: WiSnow, night: WiSnow },
  1264: { day: WiSnow, night: WiSnow },
  1273: { day: WiStormShowers, night: WiStormShowers },
  1276: { day: WiThunderstorm, night: WiThunderstorm },
  1279: { day: WiSnow, night: WiSnow },
  1282: { day: WiSnow, night: WiSnow },
};

interface WeatherIconProps {
  weatherCode: number;
  isDay: boolean;
  size: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({ weatherCode, isDay, size }) => {
  const timeOfDay = isDay ? "day" : "night";
  const IconComponent = weatherIconMap[weatherCode]?.[timeOfDay] || WiDaySunny;

  return <IconComponent size={size} color="#000" />;
};

export default WeatherIcon;
