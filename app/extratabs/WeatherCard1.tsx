import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

const WeatherCard: React.FC<Props> = ({ city, temperature, description, humidity, windSpeed }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temp}>{temperature}°C</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.info}>Humidity: {humidity}%</Text>
      <Text style={styles.info}>Wind: {windSpeed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    marginTop: 20,
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: '#666',
  },
  info: {
    fontSize: 14,
    color: '#444',
  },
});

export default WeatherCard;
