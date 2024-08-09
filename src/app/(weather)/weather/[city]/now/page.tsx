"use client";

import { FC, Fragment } from "react";
import { Section } from "@/components/layouts";
import { useWeather } from "@/context/weather";
import { WeatherInfos } from "@/components/weatherinfos";
import nowWeatherInfos from "@/data/nowWeatherInfos";
import CityMap from "@/components/CityMap";
import Title from "@/components/Title";
import TempWithDesc from "@/components/TempWithDesc";
import WeatherIcon from "@/components/WeatherIcon";
import { cn } from "@/utils/cn";
import CityPhoto from "@/components/CityPhoto";
import Loader from "@/components/Loader";
import Error from "@/components/Error";

const Page: FC = () => {
  const { weatherData, cityPhoto, isLoading, error } = useWeather();

  return (
    <Fragment>
      {error ? (
        <Error>{error}</Error>
      ) : isLoading ||
        !weatherData ||
        !weatherData.current ||
        !weatherData.location ||
        !cityPhoto ? (
        <Loader />
      ) : (
        <Section className="py-5 flex gap-7 xl:h-full flex-wrap-reverse xl:flex-nowrap">
          <div
            className={cn(
              "basis-full h-full flex gap-7 flex-col",
              cityPhoto.results[0] && "xl:basis-2/4"
            )}
          >
            <div className="flex justify-between">
              <div>
                <Title text="Weather in" city={weatherData.location.name} />
                <TempWithDesc
                  temp={weatherData.current.temp_c}
                  aftertext={weatherData.current.condition.text}
                />
              </div>
              <WeatherIcon
                weatherCode={weatherData.current.condition.code}
                isDay={weatherData.current.is_day}
                size={100}
              />
            </div>
            <WeatherInfos
              weatherInfos={nowWeatherInfos(weatherData.current)}
              center={false}
            />
            <CityMap location={weatherData.location} />
          </div>
          {cityPhoto.results[0] && (
            <CityPhoto
              cityPhoto={cityPhoto.results[0].urls.regular}
              photoAuthor={cityPhoto.results[0].user.name}
              photoLink={cityPhoto.results[0].links.html}
              city={weatherData.location.name}
            />
          )}
        </Section>
      )}
    </Fragment>
  );
};

export default Page;
