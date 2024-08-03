"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { WeatherLayout } from "@/components/layouts";
import { useWeather } from "@/context/weather";
import { fetchWeather } from "@/actions/weather";
import { useParams } from "next/navigation";
import { WeatherData } from "@/context/weather";

const WeatherPageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { city } = useParams();
  const { setWeatherData } = useWeather();

  useEffect(() => {
    fetchWeather(city).then((data: WeatherData) => setWeatherData(data));
  }, [city]);

  return <WeatherLayout>{children}</WeatherLayout>;
};

export default WeatherPageLayout;
