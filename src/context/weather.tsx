"use client";

import { createContext, useContext, useState, ReactNode, FC } from "react";
import { WeatherData } from "@/types";

interface WeatherContextProps {
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData) => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
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
