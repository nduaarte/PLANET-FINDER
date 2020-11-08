import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers/currentInfoApiReducer';
import { useHistory } from 'react-router-dom';

import { Container, PlanetCard, ContainerTitle } from './styles';
import { planetImagesArr } from './importImagesPlanets';

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

  const search = 'aa';
  const [filteredPlanetsName, setFilteredPlanetsName] = useState([]);
  useEffect(() => {
    const planetsNames = planetListArr.map((planet: {name: string}) => planet.name);

    const filteredPlanetsName = planetsNames.filter((planetName: string) => {
      return planetName.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredPlanetsName(filteredPlanetsName);
  }, []);

  return (
    <Container>      
      {filteredPlanetsName.map((planetName: string, index: number) => (
        count++,
        <PlanetCard key={index}>
          
          <img onClick={() => dispatchToNavigate(
            planetListArr.name, planetListArr.climate, planetListArr.population, planetListArr.diameter
          )} src={planetImagesArr[count]} alt={planetListArr.name}/>

          <ContainerTitle>
            <h2>{planetName}</h2>
          </ContainerTitle>
        </PlanetCard>
      ))}
    </Container>
  );
}

export default PlanetList;