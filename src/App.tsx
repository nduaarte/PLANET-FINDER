import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import useApiRequest from './services/apiRequest';

import Header from './components/Header';
import PlanetInfo from './components/PlanetInfo';

function App() {
  useApiRequest();
  
  return (
    <>
      <Header />
      <PlanetInfo />
      <GlobalStyles />
    </>
  );
}

export default App;
