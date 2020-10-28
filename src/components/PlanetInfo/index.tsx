import React from 'react';
import { Container, Info, Title } from './styles';
import { useSelector } from 'react-redux';
import img from '../../images/planets/KASHYYYK.png'

const PlanetInfo: React.FC = () => {
  const planetName = useSelector(state => state.currentInfoApi.planetName);
  const population = useSelector(state => state.currentInfoApi.population);
  const climate = useSelector(state => state.currentInfoApi.climate);
  const diameter = useSelector(state => state.currentInfoApi.diameter);

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