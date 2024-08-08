"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { WeatherLayout } from "@/components/layouts";
import { useWeather } from "@/context/weather";
import { fetchWeather } from "@/actions/api";
import { fetchCityPhoto } from "@/actions/api";
import { useParams } from "next/navigation";

const WeatherPageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { city } = useParams();
  const { setWeatherData, setCityPhoto, setIsLoading, setError } = useWeather();

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const weatherData = await fetchWeather(city);
        const cityPhoto = await fetchCityPhoto(city);
        setWeatherData(weatherData);
        setCityPhoto(cityPhoto);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return <WeatherLayout>{children}</WeatherLayout>;
};

export default WeatherPageLayout;
