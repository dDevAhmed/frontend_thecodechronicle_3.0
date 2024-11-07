/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PiWind } from "react-icons/pi";
import { TbDroplet, TbSunrise, TbSunset } from "react-icons/tb";
import { useSunTimes, useWeather } from '../../services/Weather';
import CloudLightning from '../../assets/icons/weather/cloud-lightning.png'
import Cloud from '../../assets/icons/weather/cloud.png'
import Fog from '../../assets/icons/weather/fog.png'
import PartlyCloudyDay from '../../assets/icons/weather/partly-cloudy-day.png'
import Rain from '../../assets/icons/weather/rain.png'
import Snowy from '../../assets/icons/weather/snow.png'
import Sun from '../../assets/icons/weather/sun.png'

const Weather = ({ classNames }) => {
    const { data: weather, isLoading: weartherLoading, error: weatherError } = useWeather()
    const { data: sunTimes, isLoading: sunTimesLoading, error: sunTimesError } = useSunTimes()

    const weatherIconMap = {
        1000: Sun, // Sunny, Clear
        1003: PartlyCloudyDay, // Partly cloudy
        1006: Cloud, // Cloudy
        1009: Cloud, // Overcast
        1030: Fog, // Mist
        1063: Rain, // Patchy rain possible
        1066: Snowy, // Patchy Snowy possible
        1069: Rain, // Patchy sleet possible
        1072: Rain, // Patchy freezing drizzle possible
        1087: CloudLightning, // Thundery outbreaks possible
        1114: Snowy, // Blowing Snowy
        1117: Snowy, // Blizzard
        1135: Fog, // Fog
        1147: Fog, // Freezing fog
        1150: Rain, // Patchy light drizzle
        1153: Rain, // Light drizzle
        1168: Rain, // Freezing drizzle
        1171: Rain, // Heavy freezing drizzle
        1180: Rain, // Patchy light rain
        1183: Rain, // Light rain
        1186: Rain, // Moderate rain at times
        1189: Rain, // Moderate rain
        1192: Rain, // Heavy rain at times
        1195: Rain, // Heavy rain
        1198: Rain, // Light freezing rain
        1201: Rain, // Moderate or heavy freezing rain
        1204: Rain, // Light sleet
        1207: Rain, // Moderate or heavy sleet
        1210: Snowy, // Patchy light Snowy
        1213: Snowy, // Light Snowy
        1216: Snowy, // Patchy moderate Snowy
        1219: Snowy, // Moderate Snowy
        1222: Snowy, // Patchy heavy Snowy
        1225: Snowy, // Heavy Snowy
        1237: Snowy, // Ice pellets
        1240: Rain, // Light rain shower
        1243: Rain, // Moderate or heavy rain shower
        1246: Rain, // Torrential rain shower
        1249: Rain, // Light sleet showers
        1252: Rain, // Moderate or heavy sleet showers
        1255: Snowy, // Light Snowy showers
        1258: Snowy, // Moderate or heavy nowy showers
        1261: Snowy, // Light showers of ice pellets
        1264: Snowy, // Moderate or heavy showers of ice pellets
        1273: CloudLightning, // Patchy light rain with thunder
        1276: CloudLightning, // Moderate or heavy rain with thunder
        1279: CloudLightning, // Patchy light snow with thunder
        1282: CloudLightning, // Moderate or heavy snow with thunder
    };

    // fixme - show skeleton if loading, show error if error

    // if (!weather || !sunTimes) {
    //     return (
    //         <>
    //             <div className='card-weather'>
    //             <Skeleton active />
    //             </div>
    //         </>
    //     );
    // }

    // calculating suntimes
    const now = new Date();
    const sunriseTime = new Date(sunTimes?.sunrise);
    const sunsetTime = new Date(sunTimes?.sunset);
    const isDay = now >= sunriseTime && now <= sunsetTime;
    const displayTime = now < sunriseTime ? sunriseTime : sunsetTime;

    const formatTime = (date) => {
        const adjustedDate = new Date(date.getTime());
        const hours = adjustedDate.getHours();
        const minutes = adjustedDate.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${period}`;
    };
    
    return (
        <div className='flex flex-col items-center rounded-lg px-2 py-5' style={{ backgroundImage: `linear-gradient(180deg, #78C2C9, #E5E3C3, #78C2C9)` }}>
            <p className='text-md font-normal'>{weather?.location.name},<span className='text-xs font-extralight'> {weather?.location.country}</span></p>
            <img src={weatherIconMap[weather?.current.condition.code] || Cloud} alt="weather icon" className='h-14 w-auto mt-3' />
            <p className='text-3xl relative mt-2'>{weather?.current.temp_c}<span className='absolute text-sm -top-1'>o</span><span className='ml-2'>c</span></p>
            <p className='font-light'>{weather?.current.condition.text}</p>

            <span className='flex items-center justify-between gap-3 mt-3'>
                <p className='flex flex-col items-center text-center text-sm'>
                    <PiWind />
                    <span className='text-xs'>{weather?.current.wind_kph} km/hr</span>
                </p>
                <p className='flex flex-col items-center text-center text-sm'>
                    <TbDroplet />
                    <span className='text-xs'>{weather?.current.humidity} %</span>
                </p>
                <p className='flex flex-col items-center text-center text-sm'>
                    {now < sunriseTime ? <TbSunrise /> : <TbSunset />}                    
                    <span className='text-xs'>{formatTime(displayTime)}</span>
                </p>
            </span>
        </div>
    )
}

export default Weather