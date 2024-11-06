/* eslint-disable react/prop-types */
import { useState } from 'react';
import SearchBarBackground from '../../assets/images/city_skyline_1.jpg'
import Card from '../../ui/Card'
import { SlFire } from "react-icons/sl";
import { PiWind } from "react-icons/pi";
import { TbDroplet, TbSunrise, TbSunset } from "react-icons/tb";

const Weather = ({ classNames }) => {
    const weatherIconMap = {
        1000: 'fa-sun', // Sunny, Clear
        1003: 'fa-cloud-sun', // Partly cloudy
        1006: 'fa-cloud', // Cloudy
        1009: 'fa-cloud', // Overcast
        1030: 'fa-fog', // Mist
        1063: 'fa-cloud-rain', // Patchy rain possible
        1066: 'fa-snowflake', // Patchy snow possible
        1069: 'fa-cloud-rain', // Patchy sleet possible
        1072: 'fa-cloud-rain', // Patchy freezing drizzle possible
        1087: 'fa-cloud-bolt', // Thundery outbreaks possible
        1114: 'fa-snowflake', // Blowing snow
        1117: 'fa-snowflake', // Blizzard
        1135: 'fa-fog', // Fog
        1147: 'fa-fog', // Freezing fog
        1150: 'fa-cloud-rain', // Patchy light drizzle
        1153: 'fa-cloud-rain', // Light drizzle
        1168: 'fa-cloud-rain', // Freezing drizzle
        1171: 'fa-cloud-rain', // Heavy freezing drizzle
        1180: 'fa-cloud-rain', // Patchy light rain
        1183: 'fa-cloud-rain', // Light rain
        1186: 'fa-cloud-rain', // Moderate rain at times
        1189: 'fa-cloud-rain', // Moderate rain
        1192: 'fa-cloud-rain', // Heavy rain at times
        1195: 'fa-cloud-rain', // Heavy rain
        1198: 'fa-cloud-rain', // Light freezing rain
        1201: 'fa-cloud-rain', // Moderate or heavy freezing rain
        1204: 'fa-cloud-rain', // Light sleet
        1207: 'fa-cloud-rain', // Moderate or heavy sleet
        1210: 'fa-snowflake', // Patchy light snow
        1213: 'fa-snowflake', // Light snow
        1216: 'fa-snowflake', // Patchy moderate snow
        1219: 'fa-snowflake', // Moderate snow
        1222: 'fa-snowflake', // Patchy heavy snow
        1225: 'fa-snowflake', // Heavy snow
        1237: 'fa-snowflake', // Ice pellets
        1240: 'fa-cloud-rain', // Light rain shower
        1243: 'fa-cloud-rain', // Moderate or heavy rain shower
        1246: 'fa-cloud-rain', // Torrential rain shower
        1249: 'fa-cloud-rain', // Light sleet showers
        1252: 'fa-cloud-rain', // Moderate or heavy sleet showers
        1255: 'fa-snowflake', // Light snow showers
        1258: 'fa-snowflake', // Moderate or heavy snow showers
        1261: 'fa-snowflake', // Light showers of ice pellets
        1264: 'fa-snowflake', // Moderate or heavy showers of ice pellets
        1273: 'fa-cloud-bolt', // Patchy light rain with thunder
        1276: 'fa-cloud-bolt', // Moderate or heavy rain with thunder
        1279: 'fa-cloud-bolt', // Patchy light snow with thunder
        1282: 'fa-cloud-bolt', // Moderate or heavy snow with thunder
    };

    const [weatherData, setWeatherData] = useState(null)
    const [sunTimes, setSunTimes] = useState(null);

    return (
        // url(${isDay ? CardBackgroundDay : CardBackgroundNight})
        <div className='flex flex-col items-center rounded-lg px-2 py-5' style={{ backgroundImage: `linear-gradient(180deg, #78C2C9, #E5E3C3, #78C2C9)` }}>
            <p className='text-md font-normal'>Kaduna,<span className='text-xs font-extralight'> Nigeria</span></p>
            <SlFire className='h-14 w-auto mt-3' />
            {/* <i className={`weather-icon fa-duotone ${weatherIconMap[current.condition.code] || 'fa-cloud'}`}></i> */}
            <p className='text-3xl relative mt-2'>20<span className='absolute text-sm -top-1'>o</span><span className='ml-2'>c</span></p>
            <p className='font-light'>clear sky</p>
            <span className='flex items-center justify-between gap-5 mt-3'>
                <p className='flex flex-col items-center text-center text-sm'>
                    <PiWind />
                    <span className='text-xs'>12 km/hr</span>
                </p>
                <p className='flex flex-col items-center text-center text-sm'>
                    <TbDroplet />
                   <span className='text-xs'>20 %</span>
                </p>
                <p className='flex flex-col items-center text-center text-sm'>
                    {/* {`${now < sunriseTime ? <TbSunrise /> : <TbSunset />}`} */}
                    {/* formatTime(displayTime) */}
                    <TbSunrise />
                    <span className='text-xs'>7am</span>
                </p>
            </span>
        </div>
    )
}

export default Weather