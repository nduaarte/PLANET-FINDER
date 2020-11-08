import React from 'react';
import { Container, Info, Title } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

import img1 from '../../images/planets/img2.png'
import img2 from '../../images/planets/img3.png'
import img3 from '../../images/planets/img6.png'

const PlanetInfo: React.FC = () => {
  const planetName = useSelector((state: RootState) => state.currentInfoApiReducer.planetName);
  const population = useSelector((state: RootState) => state.currentInfoApiReducer.population);
  const climate = useSelector((state: RootState) => state.currentInfoApiReducer.climate);
  const diameter = useSelector((state: RootState) => state.currentInfoApiReducer.diameter);

  const imagesArr = [img1, img2, img3];
  const ramdomImgSelect = Math.floor(Math.random() * imagesArr.length);
  
  return (
    <Container>
      <Title>
        <h1>{planetName}</h1>
      </Title>

      <img src={imagesArr[ramdomImgSelect]} alt="planet" />

      <Info>
        <h2>População: {population}</h2>
        <span>Clima: {climate}</span>
        <span>Diametro: {diameter}</span>
      </Info>
    </Container>
  );
}

export default PlanetInfo;