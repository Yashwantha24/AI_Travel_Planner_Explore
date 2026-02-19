import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';
import { getWeather } from '../services/weatherService';

const WeatherWidget = ({ destination }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!destination) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getWeather(destination);
                setWeather(data);
            } catch (err) {
                setError('Could not fetch weather data.');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [destination]);

    if (!destination) return null;
    if (loading) return <div className="text-gray-500 animate-pulse">Loading weather...</div>;
    if (error) return <div className="text-red-500 text-sm">{error}</div>;
    if (!weather) return null;

    const { main, weather: weatherDetails, wind } = weather;
    const currentTemp = Math.round(main.temp);
    const condition = weatherDetails[0].main;
    const description = weatherDetails[0].description;

    const getIcon = (condition) => {
        switch (condition.toLowerCase()) {
            case 'clouds': return <Cloud className="w-8 h-8 text-gray-400" />;
            case 'rain': return <CloudRain className="w-8 h-8 text-blue-400" />;
            case 'clear': return <Sun className="w-8 h-8 text-yellow-400" />;
            default: return <Sun className="w-8 h-8 text-yellow-400" />;
        }
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {getIcon(condition)}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{weather.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{description}</p>
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <Thermometer className="w-5 h-5 text-red-400" />
                    <span className="text-2xl font-bold text-gray-800">{currentTemp}°C</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                    <Wind className="w-4 h-4" />
                    <span className="text-sm">{wind.speed} m/s</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
