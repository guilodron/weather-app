import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChooseCityPage from '../pages/ChooseCityPage';
import WeatherPage from '../pages/WeatherPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ChooseCityPage} />
      <Route path="/weather/:cityName/:lat/:lon" component={WeatherPage} />
    </Switch>
  );
};

export default Routes;
