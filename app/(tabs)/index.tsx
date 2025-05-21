// app/(tabs)/index.tsx
// import * as Location from 'expo-location';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import { useWeatherContext } from '../context/WeatherContext';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../services/weatherService';


export default function HomeScreen() {
  const { currentWeather, setCurrentWeather } = useWeatherContext();
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  // this is to handle the weather of current location uusing expo-location
  // const handleLocationWeather = async () => {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setError('Permission denied to access location');
  //       setLoading(false);
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = location.coords;

  //     const data = await fetchWeatherByCoords(latitude, longitude);
  //     setCurrentWeather(data);
  //     setCity(''); // optionally clear input
  //   } catch (e) {
  //     setError('Could not fetch weather for current location.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLocationWeather = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Your location:', latitude, longitude);

        try {
          const data = await fetchWeatherByCoords(latitude, longitude); // You’ll add this in weatherService.ts
          setCurrentWeather(data);
        } catch (e) {
          console.error('Failed to fetch weather for location', e);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to fetch your location.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    );
  };


  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherByCity(city);
      setCurrentWeather(data);
      setCity(''); //
    } catch (e) {
      setError('Could not fetch weather. Please check the city name.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast App 🌦️</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      <TouchableOpacity onPress={handleLocationWeather} style={styles.locationButton}>
        <Text style={styles.locationButtonText}>Use My Location 📍</Text>
      </TouchableOpacity>
      {/* <View style={styles.locationButtonWrapper}>
        <Button style={styles.locationButton} title="Use My Location 📍" onPress={handleLocationWeather} />
      </View> */}
      {loading && <ActivityIndicator style={{ marginVertical: 16 }} />}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {/* {currentWeather && (
        <WeatherCard
          city={currentWeather.name}
          temperature={currentWeather.main.temp}
          description={currentWeather.weather[0].description}
          humidity={currentWeather.main.humidity}
          windSpeed={currentWeather.wind.speed}
        />
      )} */}
      {currentWeather && (
        <TouchableOpacity onPress={() => router.push({ pathname: '/forecast', params: { city: currentWeather.name } })}>
          <WeatherCard
            city={currentWeather.name}
            temperature={currentWeather.main.temp}
            description={currentWeather.weather[0].description}
            humidity={currentWeather.main.humidity}
            windSpeed={currentWeather.wind.speed}
          />
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color: '#fff', // optional, depending on your theme
  },
  // locationButtonWrapper: {
  //   marginTop: 20,
  //   backgroundColor: '#000000',
  // },
  // locationButton: {
  //   backgroundColor: '#000000',
  //   color: '#FFFFFF',
  // },
  locationButton: {
    backgroundColor: '#000000', 
    borderColor: '#1e90ff',  // blue border
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 12,
    alignItems: 'center',
  },

  locationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 4,
    color: 'white',
  },
  error: {
    color: 'red',
    marginVertical: 8,
  },
});
