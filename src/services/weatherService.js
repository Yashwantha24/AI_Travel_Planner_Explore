import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city) => {
    if (!API_KEY || API_KEY === 'YOUR_OPENWEATHER_API_KEY') {
        console.warn("OpenWeatherMap API key is missing or invalid.");
        return null;
    }

    try {
        // Current weather
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', // Use metric for Celsius
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        throw error;
    }
};
