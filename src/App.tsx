import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Header from './components/Header';
import PlanetInfo from './components/PlanetInfo';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <PlanetInfo />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
