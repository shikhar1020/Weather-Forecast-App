import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WeatherContextType {
  currentWeather: any;
  setCurrentWeather: (data: any) => void;
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (city: string) => {
    if (!favorites.includes(city)) {
      setFavorites((prev) => [...prev, city]);
    }
  };

  const removeFavorite = (city: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== city));
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};



