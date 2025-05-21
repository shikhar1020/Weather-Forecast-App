// app/components/FavoriteButton.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useWeatherContext } from '../context/WeatherContext';

interface FavoriteButtonProps {
  city: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ city }) => {
  const { favorites, addFavorite, removeFavorite } = useWeatherContext();

  const isFavorite = favorites.includes(city);

  console.log("just testing", city, isFavorite);
  const toggleFavorite = () => {
    console.log(`Toggling favorite for city: ${city}`);
    if (isFavorite) {
      removeFavorite(city);
    } else {
      addFavorite(city);
    }
  };

  return (
    <TouchableOpacity
      onPress={toggleFavorite}
      style={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}
    >
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavorite ? 'red' : 'black'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
