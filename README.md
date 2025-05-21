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

## 🔑 API Key

- This app uses **OpenWeatherMap API**
- API key is currently hardcoded (`services/weatherService.ts`)
- Replace with your own or use environment variables (`expo-constants` or `dotenv`)

```ts
const API_KEY = 'd47eaf5c4cc3c22cf85184d2184091a';
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

## 📸 Screenshots

> _Add screenshots from Home, Forecast, and Favorites screen here._

---

## 👨‍💻 Author

- Built by **Shikhar Srivastava** as part of the Startup India Co. assignment
- Reach out on [LinkedIn](https://linkedin.com/in/shikhar-srivastava)

---

## 📜 License

This project is licensed under the MIT License.