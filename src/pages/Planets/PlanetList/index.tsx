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

  function dispatchToNavigate(name: string) {
    dispatch({ type: 'UPDATE_PLANET_NAME', value: name });
    history.push('/planetName');
  }

  const search = useSelector((state: RootState) => state.currentInfoApiReducer.inputPlanetCurrent);
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
          <img onClick={() => dispatchToNavigate(planetName)} src={planetImagesArr[count]} alt={'planet'}/>
          <ContainerTitle>
            <h2>{planetName}</h2>
          </ContainerTitle>
        </PlanetCard>
      ))}
    </Container>
  );
}

export default PlanetList;