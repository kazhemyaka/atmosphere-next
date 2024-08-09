import WeatherData from "@/types/WeatherData";
import { FC } from "react";
import DateTime from "@/components/DateTime";
import WeatherIcon from "@/components/WeatherIcon";
import TempWithDesc from "@/components/TempWithDesc";
import { WeatherInfos } from "../weatherinfos";
import hourlyWeatherInfos from "@/data/hourlyWeatherInfos";

interface HourlyWeatherCardProps {
  hour: WeatherData["forecast"]["forecastday"][0]["hour"][0];
  timeZone: string;
}

const HourlyWeatherCard: FC<HourlyWeatherCardProps> = ({ hour, timeZone }) => {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <DateTime
        dateTimeEpoch={hour.time_epoch}
        timeZone={timeZone}
        hours={true}
      />
      <div className="p-6 flex flex-col">
        <div className="flex items-center mb-4">
          <WeatherIcon
            weatherCode={hour.condition.code}
            isDay={hour.is_day}
            size={80}
          />
          <TempWithDesc temp={hour.temp_c} aftertext={hour.condition.text} />
        </div>
        <WeatherInfos weatherInfos={hourlyWeatherInfos(hour)} />
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
