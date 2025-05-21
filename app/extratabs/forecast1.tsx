import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ForecastCard from '../components/ForecastCard';
import { fetchForecastByCity } from '../services/weatherService';


const ForecastScreen = () => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [city] = useState('Delhi'); // You can later allow selection

  useEffect(() => {
    const getForecast = async () => {
      try {
        const data = await fetchForecastByCity(city);
        setForecastData(data.list); // 'list' contains 3-hour interval forecasts
      } catch (e) {
        setError('Failed to load forecast');
      } finally {
        setLoading(false);
      }
    };

    getForecast();
  }, [city]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-Day Forecast for {city}</Text>
      <FlatList
        data={forecastData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ForecastCard
            dateTime={item.dt_txt}
            temperature={item.main.temp}
            description={item.weather[0].description}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default ForecastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});
