# AI Travel Planner Explore 🌍✈️

**AI Travel Planner Explore** is a modern, AI-powered web application designed to create personalized travel itineraries. Built with **React**, **Vite**, and **Tailwind CSS**, it leverages **Google's Gemini AI** to generate day-by-day travel plans based on your destination, budget, and interests. It also features real-time weather updates to help you pack tailored for your trip!

---

## 🚀 Key Features

*   **🤖 AI-Powered Itineraries:** Generates detailed, day-by-day travel plans using Google Gemini AI.
*   **🌤️ Real-Time Weather:** Displays current weather conditions for your destination using OpenWeatherMap.
*   **🎨 Personalized Planning:** Customizes trips based on:
    *   **Destination:** Anywhere in the world!
    *   **Duration:** 1 to 14 days.
    *   **Budget:** Low, Medium, High, or Luxury.
    *   **Interests:** History, Food, Adventure, Relaxation, etc.
*   **📱 Responsive Design:** Fully responsive UI built with Tailwind CSS, looking great on mobile and desktop.
*   **⚡ Blazing Fast:** Powered by Vite for instant server start and hot module replacement (HMR).

---

## 🛠️ Tech Stack

*   **Frontend Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **AI Integration:** [Google Gemini API](https://ai.google.dev/)
*   **Weather Data:** [OpenWeatherMap API](https://openweathermap.org/api)
*   **HTTP Client:** [Axios](https://axios-http.com/)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites

*   **Node.js** (v18 or higher recommended)
*   **npm** (Node Package Manager)

### 1. Clone the Repository

```bash
git clone https://github.com/Yashwantha24/AI_Travel_Planner_Explore.git
cd AI_Travel_Planner_Explore
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project and add your API keys:

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```

> **Note:** You can get a Gemini API key from [Google AI Studio](https://aistudio.google.com/) and an OpenWeatherMap API key from [OpenWeatherMap](https://openweathermap.org/api).

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the app in action!

---

## 📖 How to Use

1.  **Enter Destination:** Type in the city or country you want to visit (e.g., "Kyoto, Japan").
2.  **Select Duration:** Choose how many days you plan to stay (1-14 days).
3.  **Add Interests:** Mention what you like (e.g., "Anime, Sushi, Temples").
4.  **Set Budget:** Choose your budget level.
5.  **Generate:** Click the **"Plan My Trip"** button.
6.  **Explore:** View your generated itinerary on the right and check the current weather on the left!

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repo and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
