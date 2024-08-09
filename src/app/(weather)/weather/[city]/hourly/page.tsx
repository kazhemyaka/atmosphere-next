"use client";

import { FC, Fragment } from "react";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import { Section } from "@/components/layouts";
import Title from "@/components/Title";
import { HourlyWeatherCard } from "@/components/weathercards";
import { useWeather } from "@/context/weather";

const Page: FC = () => {
  const { weatherData, isLoading, error } = useWeather();

  return (
    <Fragment>
      {error ? (
        <Error>{error}</Error>
      ) : isLoading ||
        !weatherData ||
        !weatherData.current ||
        !weatherData.location ? (
        <Loader />
      ) : (
        <Section className="py-5 xl:h-full">
          <Title
            text="Hourly weather forecast for"
            city={weatherData.location.name}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {weatherData.forecast.forecastday[0].hour.map((hour) => (
              <HourlyWeatherCard
                key={hour.time_epoch}
                hour={hour}
                timeZone={weatherData.location.tz_id}
              />
            ))}
          </div>
        </Section>
      )}
    </Fragment>
  );
};

export default Page;
