"use server";

export const fetchWeather = async (city: string | string[]) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=9&aqi=no&alerts=no`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};
