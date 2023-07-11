import axios from 'axios';
import { ForecastData } from '../types/forecast-data';

export const ForecastEndpoint = 'https://api.open-meteo.com/v1/forecast';

export const getDailyReport = async (latitude: number, longitude: number, days: number) => {
    const response = await axios.get(ForecastEndpoint, {
        params: {
            latitude,
            longitude,
            days,
            daily: "temperature_2m_min,temperature_2m_max,snowfall_sum",
            timezone: "auto"
        }
    });

    if (response.status === 200) {
        return response.data as ForecastData;
    } else {
        return null;
    }
}

const forecastApiClient = {
    getDailyReport
};

export default forecastApiClient;

