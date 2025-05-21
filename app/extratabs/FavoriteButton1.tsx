import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useWeatherContext } from '../context/WeatherContext';

interface FavoriteButtonProps {
  city: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ city }) => {
  const { favorites, addFavorite, removeFavorite } = useWeatherContext();

  const isFavorite = favorites.includes(city);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(city);
    } else {
      addFavorite(city);
    }
  };

  return (
    <TouchableOpacity onPress={handleToggleFavorite} style={styles.button}>
      <Text style={styles.heart}>{isFavorite ? '❤️' : '🤍'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heart: {
    fontSize: 24,
  },
});

export default FavoriteButton;
