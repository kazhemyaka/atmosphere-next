"use server";

export const fetchWeather = async (city: string | string[]) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error.message || "Failed to fetch weather data!");
  }
};

export const fetchCityPhoto = async (city: string | string[]) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}&orientation=landscape&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&per_page=1&page=1`
  );

  const data = await response.json();
  return data;
};
