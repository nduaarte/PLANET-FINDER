import React from 'react';
import { Container, Info, Title } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

import img from '../../images/planets/KASHYYYK.png'

const PlanetInfo: React.FC = () => {
  const planetName = useSelector((state: RootState) => state.currentInfoApiReducer.planetName);
  const population = useSelector((state: RootState) => state.currentInfoApiReducer.population);
  const climate = useSelector((state: RootState) => state.currentInfoApiReducer.climate);
  const diameter = useSelector((state: RootState) => state.currentInfoApiReducer.diameter);
  
  return (
    <Container>
      <Title>
        <h1>{planetName}</h1>
      </Title>

      <img src={img} alt="planet" />

      <Info>
        <h2>População: {population}</h2>
        <span>Clima: {climate}</span>
        <span>Diametro: {diameter}</span>
      </Info>
    </Container>
  );
}

export default PlanetInfo;