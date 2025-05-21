// app/components/ForecastCard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ForecastCardProps {
  dateTime: string;
  temperature: number;
  description: string;
  humidity:number;
  windSpeed:number;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  dateTime,
  temperature,
  description,
  humidity,
  windSpeed,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.datetime}>{new Date(dateTime).toLocaleString()}</Text>
      <Text style={styles.temp}>{temperature.toFixed(1)}°C</Text>
      <Text style={styles.desc}>Humidity: {humidity}(g/m³)</Text>
      <Text style={styles.desc}>Wind Speed: {windSpeed} km/h</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default ForecastCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  datetime: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  temp: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  desc: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
});
