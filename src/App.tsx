import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
