# 🌤️ Weather Forecast App

A simple yet functional **React Native app** built using **Expo** that fetches and displays weather forecasts using the OpenWeatherMap API. The app includes search, location-based weather, favorites, and forecast navigation features.

---

## 📱 Features

### 🔍 Home Screen
- Search weather by **city name**
- View current **temperature**, **description**, **humidity**, **wind speed**
- View weather using **current location** (uses browser/Expo geolocation)
- Add/remove cities from **Favorites**

### ❤️ Favorites Screen
- View list of favorite cities
- Tap any city to view detailed 5-day forecast
- Remove cities from favorites

### 🌤️ Forecast Screen
- 5-day weather forecast with time, temperature, and description
- Accessed via city tap on Home or Favorites

### ⚙️ Tech Stack
- **React Native + Expo**
- **TypeScript**
- **Expo Router**
- **OpenWeatherMap API**
- **Context API** for state management
- **AsyncStorage** (planned) for persisting favorites
- **Axios** for API calls

---

## 📸 Screenshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/3502dd5d-ac2e-4353-9113-343305c6641a" width="250"/></td>
    <td><img src="https://github.com/user-attachments/assets/390f038b-b8c5-45fc-977f-1511e5f0fe59" width="250"/></td>
    <td><img src="https://github.com/user-attachments/assets/3fbed353-928b-46ad-8d28-e76109ab508d" width="250"/></td>
  </tr>
</table>

---

## 🧱 Project Structure

```
weather-forecast-app/
├── app/
│   ├── _layout.tsx                # Root layout
│   ├── context/
│   │   └── WeatherContext.tsx     # Global state provider
│   ├── services/
│   │   └── weatherService.ts      # API calls
│   ├── components/
│   │   ├── WeatherCard.tsx
│   │   ├── FavoriteButton.tsx
│   │   ├── ForecastCard.tsx
│   ├── (tabs)/
│   │   ├── index.tsx              # Home screen
│   │   ├── favorites.tsx          # Favorites screen
│   │   ├── forecast.tsx           # Forecast screen
│   │   └── _layout.tsx            # Tab layout
├── assets/
│   └── fonts/                     # Custom fonts (optional)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Running the App

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Expo server

```bash
npm start
```

### 4. Run on devices

- **Web**: Press `w`
- **Android**: Scan QR code with Expo Go app
- **iOS**: Open with iOS simulator / Expo Go

---

## 🧪 Future Enhancements

- 🌙 **Dark Mode Toggle**
- 💾 **AsyncStorage integration** for persistence
- 🔄 **Pull-to-refresh**
- ⚠️ **Weather alerts**

---

## 🧠 Learning Highlights

- React Navigation (Tabs + Stack)
- React Context for global state
- Real-time toggle and state updates
- Handling geolocation and APIs
- Clean component structure

---

## 👨‍💻 Author

- Built by **Shikhar Srivastava** as part of the Startup India Co. assignment
- Reach out on [LinkedIn](https://www.linkedin.com/in/shikhar2srivastava2/)

---

## 📜 License

This project is licensed under the MIT License.
