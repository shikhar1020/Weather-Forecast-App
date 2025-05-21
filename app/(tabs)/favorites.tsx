import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; //
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FavouriteWeatherCard from '../components/FavouriteWeatherCard';
import { useWeatherContext } from '../context/WeatherContext';



import { router } from 'expo-router';

export default function FavoritesScreen() {
    // const { favorites } = useWeatherContext();
    const { favorites, removeFavorite } = useWeatherContext();


    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">Favorite Cities</ThemedText>

            {favorites.length === 0 ? (
                <Text style={styles.emptyText}>No favorite cities yet. 💔</Text>
            ) : (
                favorites.map((city) => (
                    <ThemedView key={city} style={styles.card}>
                        <TouchableOpacity
                            // key={city}
                            onPress={() => router.push({ pathname: '/forecast', params: { city } })}
                        >
                            <FavouriteWeatherCard
                                city={city}
                            // temperature={0} // placeholder
                            // description="Click to view forecast"
                            // humidity={0}
                            // windSpeed={0}
                            />
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={() => removeFavorite(city)}
                            style={styles.removeButton}
                        >
                            <Text style={styles.removeButtonText}>Remove</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            onPress={() => removeFavorite(city)}
                            style={styles.removeIconButton} // new style for positioning
                        >
                            <Ionicons name="trash" size={20} color="red" />
                        </TouchableOpacity>

                    </ThemedView>
                ))

                // <TouchableOpacity onPress={() => router.push({ pathname: '/forecast', params: { city } })}>
                //     <WeatherCard
                //         city={city}
                //         temperature={data.main.temp}
                //         description={data.weather[0].description}
                //         humidity={data.main.humidity}
                //         windSpeed={data.wind.speed}
                //     />
                // </TouchableOpacity>
                // <FlatList
                //   data={favorites}
                //   keyExtractor={(item) => item}
                //   renderItem={({ item }) => (
                //     <View style={styles.card}>
                //       <Text style={styles.city}>{item}</Text>
                //     </View>
                //   )}
                // />


            )}
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    emptyText: {
        marginTop: 16,
        fontStyle: 'italic',
        color: '#666',
    },
    card: {
        backgroundColor: '#fff',
        padding: 2,
        marginVertical: 8,
        borderRadius: 6,
        elevation: 2,
    },
    city: {
        fontSize: 18,
        fontWeight: '500',
    },
    // -------------------------------------
    removeButton: {
        backgroundColor: '#ff4444',
        padding: 6,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginRight: 16,
        marginTop: 8,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    removeIconButton: {
        position: 'absolute',
        top: 30,
        right: 8,
        padding: 4,
        zIndex: 1,
    }


});




// // Inside your render:
// <TouchableOpacity onPress={() => router.push({ pathname: '/forecast', params: { city } })}>
//   <WeatherCard
//     city={city}
//     temperature={data.main.temp}
//     description={data.weather[0].description}
//     humidity={data.main.humidity}
//     windSpeed={data.wind.speed}
//   />
// </TouchableOpacity>

