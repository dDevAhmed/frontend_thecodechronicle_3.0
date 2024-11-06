import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=kaduna&aqi=no`;

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setWeatherData(data);
    // } catch (error) {
    //     console.error('Error fetching weather data:', error);
    // }

    try {
        const querySnapshot = await getDocs(collection(db, "events"));
        // const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  

        const data = querySnapshot.docs.map(doc => {
            const eventData = doc.data();
            return {
                id: doc.id,
                ...eventData,
                // date: orderData.date ? orderData.date.toDate().toLocaleDateString() : '', // Convert Firestore Timestamp to date  
                // date: eventData.date ? eventData.date.toDate().toLocaleDateString('en-GB', {
                //   day: '2-digit',
                //   month: 'long',
                //   year: 'numeric'
                // }) : '', // Format the date inline  
            };
        });

        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
    }
};

const fetchSunTimes = async () => {
    // fixme - use user current location
    const latitude = 10.52;
    const longitude = 7.44;
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setSunTimes(data.results);
    // } catch (error) {
    //     console.error('Error fetching sunrise and sunset data:', error);
    // }
}

export const useEvents = () => {
    return useQuery({ // Use the object form  
        queryKey: ['weather'],
        queryFn: fetchWeather,
    });
}