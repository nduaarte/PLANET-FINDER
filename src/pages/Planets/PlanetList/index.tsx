import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers/currentInfoApiReducer';
import { useHistory } from 'react-router-dom';

import { Container, PlanetCard, ContainerTitle } from './styles';
import { planetImagesArr } from './importImagesPlanets';

interface planetProps {
  name: string;
  climate: string;
  population: number;
  diameter: number;
}

const PlanetList: React.FC = () => {
  const planetListArr = useSelector((state: RootState) => state.currentInfoApiReducer.planetListArr);
  const dispatch = useDispatch();
  const history = useHistory();
  let count = -1;

  function dispatchToNavigate(name: string, climate: string, population: number, diameter: number) {
    dispatch({ type: 'UPDATE_PLANET_NAME', value: name });
    dispatch({ type: 'UPDATE_CLIMATE', value: climate });
    dispatch({ type: 'UPDATE_POPULATION', value: population });
    dispatch({ type: 'UPDATE_DIAMETER', value: diameter });

    history.push('/planetName');
  }

  useEffect(() => {
    
  
  }, []);

  return (
    <Container>      
      {planetListArr.map((planet: planetProps, index: number) => (
        count++,
        <PlanetCard key={index}>
          <img onClick={() => dispatchToNavigate(planet.name, planet.climate, planet.population, planet.diameter)} src={planetImagesArr[count]} alt={planet.name} />
   
          <ContainerTitle>
            <h2>{planet.name}</h2>
          </ContainerTitle>
        </PlanetCard>
      ))}
    </Container>
  );
}

export default PlanetList;