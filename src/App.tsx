import React from 'react';
import WeatherPage from './pages/WeatherPage';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <WeatherPage />
    </>
  );
};

export default App;
