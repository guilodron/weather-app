/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiWind, FiCloudRain, FiSunrise, FiSunset } from 'react-icons/fi';
import PuffLoader from 'react-spinners/PuffLoader';
import { useParams } from 'react-router-dom';
import tzlookup from 'tz-lookup';
import Morning from '../../components/Morning';
import Sunset from '../../components/Sunset';
import Night from '../../components/Night';

import { Container, Temperature, WeatherInfo, Loading } from './styles';

interface WeatherData {
  temp: number;
  wind: number;
  humidity: number;
  sunrise: string;
  sunset: string;
  current: string;
}

interface RouteParams {
  cityName: string;
  lat: string;
  lon: string;
}

const WeatherPage: React.FC = () => {
  const apiKey = '79aee2862c7a3d326e94667d012c51be';
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const params = useParams<RouteParams>();
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=${apiKey}&units=metric`,
        );

        // Get current time in the city's timezone
        const timezone = tzlookup(
          response.data.coord.lat,
          response.data.coord.lon,
        );
        const timeOptions = {
          hour: 'numeric',
          minute: 'numeric',
          timeZone: timezone,
        } as const;

        const currentTime = new Date().toLocaleTimeString('pt-BR', timeOptions);

        setWeather({
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          sunrise: new Date(
            response.data.sys.sunrise * 1000,
          ).toLocaleTimeString('pt-BR', timeOptions),
          sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(
            'pt-BR',
            timeOptions,
          ),
          current: currentTime,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [params]);

  return (
    <Container>
      {weather !== null ? (
        <>
          {(() => {
            const current = parseInt(weather.current, 10);
            if (current > 6 && current <= 15) {
              return <Morning />;
            }
            if (current >= 16 && current <= 19) {
              return <Sunset />;
            }
            return <Night />;
          })()}
          <Temperature>
            <h1>{Math.floor(weather.temp)}° C</h1>
            <span>{params.cityName}</span>
          </Temperature>
          <WeatherInfo>
            <div>
              <h2>
                <FiCloudRain /> Umidade
              </h2>
              <span>{weather.humidity}%</span>
              <h2>
                <FiWind /> Vento
              </h2>
              <span>{weather?.wind}m/s</span>
            </div>
            <div>
              <h2>
                <FiSunrise /> Nascer do sol
              </h2>
              <span>{weather.sunrise}</span>
              <h2>
                <FiSunset /> Por do sol
              </h2>
              <span>{weather.sunset}</span>
            </div>
          </WeatherInfo>
        </>
      ) : (
        <Loading>
          <PuffLoader />
        </Loading>
      )}
    </Container>
  );
};

export default WeatherPage;
