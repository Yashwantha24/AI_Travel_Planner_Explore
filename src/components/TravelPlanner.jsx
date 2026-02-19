import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Sparkles, Loader2 } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import ItineraryDisplay from './ItineraryDisplay';
import { generateItinerary } from '../services/geminiService';

const TravelPlanner = () => {
    const [formData, setFormData] = useState({
        destination: '',
        days: 3,
        interests: '',
        budget: 'Medium'
    });
    const [itinerary, setItinerary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchedDestination, setSearchedDestination] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setItinerary(null);
        setSearchedDestination(formData.destination);

        try {
            // Add budget to interests for the prompt
            const enhancedInterests = `${formData.interests} (Budget: ${formData.budget})`;
            const result = await generateItinerary(formData.destination, formData.days, enhancedInterests);
            setItinerary(result);
        } catch (error) {
            console.error(error);
            alert('Failed to generate itinerary. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-12">
            <header className="max-w-5xl mx-auto mb-12 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-6 shadow-lg shadow-blue-600/30">
                    <Plane className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 tracking-tight">
                    AI Travel Planner
                </h1>
                <p className="text-xl text-blue-600/80 font-medium">
                    Discover your next adventure with personalized itineraries powered by Gemini
                </p>
            </header>

            <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Form & Weather */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-500" /> Destination
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g., Paris, Tokyo"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-500" /> Duration (Days)
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="14"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                                    value={formData.days}
                                    onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-blue-500" /> Interests & Style
                                </label>
                                <textarea
                                    placeholder="e.g., History, Food, Hiking..."
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                                    value={formData.interests}
                                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                    <option>Luxury</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Generating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5" /> Plan My Trip
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Weather Widget (Sticky on Desktop) */}
                    <div className="sticky top-6">
                        <WeatherWidget destination={searchedDestination} />
                    </div>

                </div>

                {/* Right Column: Itinerary Display */}
                <div className="lg:col-span-2">
                    {itinerary ? (
                        <ItineraryDisplay itinerary={itinerary} />
                    ) : (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 rounded-3xl bg-white/50">
                            <div className="bg-gray-100 p-4 rounded-full mb-4">
                                <MapPin className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-lg font-medium">Your itinerary will appear here</p>
                            <p className="text-sm">Enter details to get started</p>
                        </div>
                    )}
                </div>

            </main>
        </div>
    );
};

export default TravelPlanner;
