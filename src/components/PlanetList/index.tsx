import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

import { Container, PlanetCard, ContainerTitle } from './styles';
import { planetImagesArr } from './importImagesPlanets';

const PlanetList: React.FC = () => {
  const planetListArr = useSelector((state: RootState) => state.currentInfoApiReducer.planetListArr);
  let count = -1;

  return (
    <Container>      
      {planetListArr.map((planet: { name: string }, index: number) => (
        count++,
        <PlanetCard key={index}>
          <img src={planetImagesArr[count]} alt={planet.name}/>
          <ContainerTitle>
            <h2>{planet.name}</h2>
          </ContainerTitle>
        </PlanetCard>
      ))}
    </Container>
  );
}

export default PlanetList;