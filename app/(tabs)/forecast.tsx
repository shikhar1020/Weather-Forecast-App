import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import ForecastCard from '../components/ForecastCard';
import { fetchForecastByCity } from '../services/weatherService';



type ForecastItem = {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
  }[];
};

export default function ForecastScreen() {
  const router = useLocalSearchParams();
  const city = router.city as string;
//   const { city } = useLocalSearchParams<{ city: string }>();
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForecast = async () => {
      if (!city) return;
      setLoading(true);
      setError('');
      try {
        const data = await fetchForecastByCity(city as string);
        setForecastData(data.list as ForecastItem[]);
      } catch (e) {
        setError('Failed to load forecast data.');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-Day Forecast for {city}</Text>

      {loading && <ActivityIndicator size="large" style={{ marginVertical: 20 }} />}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {!loading && !error && (
        <FlatList
          data={forecastData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ForecastCard
              dateTime={item.dt_txt}
              temperature={item.main.temp}
              description={item.weather[0].description}
              humidity={item.main.humidity}
              windSpeed={item.wind.speed}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
  },
});
