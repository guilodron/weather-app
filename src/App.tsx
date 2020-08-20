import React from 'react';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes />
    </HashRouter>
  );
};

export default App;
