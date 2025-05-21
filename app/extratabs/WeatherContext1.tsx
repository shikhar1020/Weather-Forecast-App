import React, { createContext, ReactNode, useContext, useState } from 'react';

interface WeatherContextType {
  currentWeather: any;
  setCurrentWeather: (data: any) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
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
