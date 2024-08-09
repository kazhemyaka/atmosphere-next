import { WeatherData } from "@/types";
import { FC } from "react";
import DateTime from "@/components/DateTime";
import WeatherIcon from "@/components/WeatherIcon";
import TempWithDesc from "@/components/TempWithDesc";
import { WeatherInfos } from "../weatherinfos";
import { dailyWeatherInfos } from "@/data";

interface DailyWeatherCardProps {
  day: WeatherData["forecast"]["forecastday"][0];
}

const DailyWeatherCard: FC<DailyWeatherCardProps> = ({ day }) => {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <DateTime dateTimeEpoch={day.date_epoch} />
      <div className="p-6 flex flex-col">
        <div className="flex items-center gap-2">
          <WeatherIcon
            weatherCode={day.day.condition.code}
            isDay={true}
            size={70}
          />
          <TempWithDesc
            pretext="Avg:"
            temp={day.day.avgtemp_c}
            aftertext={day.day.condition.text}
          />
        </div>
        <div className="flex flex-wrap gap-5 mt-4 mb-4">
          <TempWithDesc pretext="Max:" temp={day.day.maxtemp_c} />
          <TempWithDesc pretext="Min:" temp={day.day.mintemp_c} />
        </div>
        <WeatherInfos weatherInfos={dailyWeatherInfos(day.day)} />
      </div>
    </div>
  );
};
export default DailyWeatherCard;
