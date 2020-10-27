import React from 'react';
import GlobalStyles from './styles/GlobalStyles'

import Header from './components/Header';
import PlanetInfo from './components/PlanetInfo';

function App() {
  return (
    <div>
      <Header />
      <PlanetInfo />
      <GlobalStyles />
    </div>
  );
}

export default App;
