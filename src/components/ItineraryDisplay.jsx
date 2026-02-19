import React from 'react';
import ReactMarkdown from 'react-markdown';

const ItineraryDisplay = ({ itinerary }) => {
    if (!itinerary) return null;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 prose prose-indigo max-w-none">
            <ReactMarkdown>{itinerary}</ReactMarkdown>
        </div>
    );
};

export default ItineraryDisplay;
