import React from 'react';
import Morning from '../../components/Morning';
import Sunset from '../../components/Sunset';
import Night from '../../components/Night';

import { Container } from './styles';

const WeatherPage: React.FC = () => {
  return (
    <Container>
      <Night />
    </Container>
  );
};

export default WeatherPage;
