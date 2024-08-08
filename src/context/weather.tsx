"use client";

import { createContext, useContext, useState, ReactNode, FC } from "react";
import { WeatherData } from "@/types";
import { CityPhoto } from "@/types";

interface WeatherContextProps {
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData) => void;
  cityPhoto: CityPhoto | null;
  setCityPhoto: (data: CityPhoto) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [cityPhoto, setCityPhoto] = useState<CityPhoto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        cityPhoto,
        setCityPhoto,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
