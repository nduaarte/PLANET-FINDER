import React, { useEffect, useState } from 'react';
import { Container, Info, Title } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

import img1 from '../../images/planets/img2.png'
import img2 from '../../images/planets/img3.png'
import img3 from '../../images/planets/img6.png'

const PlanetInfo: React.FC = () => {
  const planetName = useSelector((state: RootState) => state.currentInfoApiReducer.planetName);
  const planetListArr = useSelector((state: RootState) => state.currentInfoApiReducer.planetListArr);

  const [count, setCount] = useState(Number);
  useEffect(() => {
    for(let i = 0; i < planetListArr.length; i++) {
      if(planetListArr[i].name === planetName)
        setCount(i);
    }
  }, []);

  const imagesArr = [img1, img2, img3];
  const ramdomImgSelect = Math.floor(Math.random() * imagesArr.length);
  return (
    <Container>
      <Title>
        <h1>{planetName}</h1>
      </Title>

      <img src={imagesArr[ramdomImgSelect]} alt="planet" />

      <Info>
        <h2>População: {planetListArr[count].name}</h2>
        <span>Clima: {planetListArr[count].climate}</span>
        <span>Diametro: {planetListArr[count].diameter}</span>
      </Info>
    </Container>
  );
}

export default PlanetInfo;