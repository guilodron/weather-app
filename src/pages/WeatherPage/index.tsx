/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiWind, FiCloudRain, FiSunrise, FiSunset } from 'react-icons/fi';
import PuffLoader from 'react-spinners/PuffLoader';
import { useParams } from 'react-router-dom';
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
  const apiKey = 'c5d95fa1925faa21dab808278d80ec19';
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const params = useParams<RouteParams>();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.lon}&
    exclude=hourly,daily&appid=${apiKey}&units=metric`,
      )
      .then((response) =>
        setWeather({
          temp: response.data.current.temp,
          humidity: response.data.current.humidity,
          wind: response.data.current.wind_speed,
          sunrise: Intl.DateTimeFormat('pt-BR', {
            timeZone: response.data.timezone,
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(response.data.current.sunrise * 1000)),
          sunset: Intl.DateTimeFormat('pt-BR', {
            timeZone: response.data.timezone,
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(response.data.current.sunset * 1000)),
          current: Intl.DateTimeFormat('pt-BR', {
            timeZone: response.data.timezone,
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(response.data.current.dt * 1000)),
        }),
      );
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
