import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WeatherCardProps {
    city: string;
    // temperature: number;
    // description: string;
    // humidity: number;
    // windSpeed: number;
}

const FavouriteWeatherCard: React.FC<WeatherCardProps> = ({
    city,
    // temperature,
    // description,
    // humidity,
    // windSpeed,
}) => {
    return (
        <View style={styles.card}>
            {/* <FavoriteButton city={city} /> */}
            <Text style={styles.city}>{city}</Text>
            {/* <Text style={styles.temp}>{temperature.toFixed(1)}°C</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.details}>Humidity: {humidity}%</Text>
            <Text style={styles.details}>Wind: {windSpeed} m/s</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginTop: 16,
        elevation: 3,
        position: 'relative',
    },
    city: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    details: {
        fontSize: 14,
        marginTop: 4,
    },
});

export default FavouriteWeatherCard;
