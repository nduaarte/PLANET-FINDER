import React from 'react';
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import useApiRequest from './hooks/useApiRequest';

import Landing from './pages/Landing';
import Planets from './pages/Planets';
import PlanetInfo from './pages/PlanetInfo';

function App() {
  useApiRequest();

  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/planetSearch" component={Planets}/>
        <Route path="/planetName" component={PlanetInfo}/>
      </Switch>

      <GlobalStyles />
    </>
  );
}

export default App;
