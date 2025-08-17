import axios from "axios";

const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY = '8b2cc2400560431793c70615252407';

export const fetchWeatherData = async (city) => {
    try{
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                key: API_KEY,
                q: city,
                days: 7,
                aqi: 'no',
                alert: 'no'
            }
        });

        return response.data;
    } catch(error){
        console.error('Error fetching weather data:', error);
        return null;
    }
}   