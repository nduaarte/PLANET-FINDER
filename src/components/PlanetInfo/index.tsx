import React from 'react';
import { Container, Info } from './styles';

import img from '../../images/planets/KASHYYYK.png'

const PlanetInfo: React.FC = () => {
  return (
    <Container>
      <img src={img} alt="planet" />

      <Info>
        <h2>População: 8000000</h2>
        <span>Clima: temperado</span>
        <span>Diametro: 12000</span>
      </Info>
    </Container>
  );
}

export default PlanetInfo;