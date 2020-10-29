import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import useApiRequest from './hooks/useApiRequest';

import Header from './components/Header';
import PlanetList from './components/PlanetList';
import PlanetInfo from './components/PlanetInfo';

function App() {
  useApiRequest();

  return (
    <>
      <Header />
      <PlanetList />
      <GlobalStyles />
    </>
  );
}

export default App;
