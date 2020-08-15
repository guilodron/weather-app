/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, City, Cities } from './styles';
import cities from '../../data/cities.json';

interface Coordenate {
  lat: number;
  lon: number;
}

interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: Coordenate;
}

const ChooseCityPage: React.FC = () => {
  const [filter, setFilter] = useState('');

  const history = useHistory();

  const handleCityChoice = useCallback(
    (city: City) => {
      history.push(`/weather/${city.name}/${city.coord.lat}/${city.coord.lon}`);
    },
    [history],
  );

  return (
    <Container>
      <input
        placeholder="Selecione sua cidade"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Cities show={filter !== ''}>
        {cities
          .filter((city) => {
            if (filter !== '') {
              return (
                city.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
              );
            }
            return true;
          })
          .map((city) => (
            <City key={city.id} onClick={() => handleCityChoice(city)}>
              <span>
                {city.name} - {city.country}
              </span>
            </City>
          ))}
      </Cities>
    </Container>
  );
};

export default ChooseCityPage;
