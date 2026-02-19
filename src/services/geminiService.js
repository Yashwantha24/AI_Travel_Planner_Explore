import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateItinerary = async (destination, days, interests) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Create a detailed ${days}-day travel itinerary for a trip to ${destination}. 
    The traveler is interested in: ${interests}. 
    Please format the response in styled Markdown, with a daily breakdown.
    Include recommendations for restaurants and hidden gems.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.error("Error generating itinerary:", error);
        throw error;
    }
};
