import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import useApiRequest from './hooks/useApiRequest';

import Landing from './pages/Landing';
import Planets from './pages/Planets';
import PlanetInfo from './pages/PlanetInfo';

function App() {
  useApiRequest();

  return (
    <BrowserRouter>
  
      <Route path="/" component={Landing} />
      <Route path="/planetSearch" component={Planets}/>
      <Route path="/:planetName" component={PlanetInfo}/>
   
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
